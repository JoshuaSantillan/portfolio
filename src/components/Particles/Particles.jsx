import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const mount = useRef();
  const renderer = useRef();
  const scene = useRef();
  const points = useRef();
  const camera = useRef();
  const light = useRef();
  const requestRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // Create Scene and Camera View
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
    camera.current.position.z = 5;

    // Add Directional Light
    light.current = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.current.add(light.current);
    light.current.position.set(1, 1, 1);

    // Mount and render scene into with the DOM
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(dimensions.width, dimensions.height);
    const mountCurrent = mount.current;
    mountCurrent.appendChild(renderer.current.domElement);

    const vertices = [];
    const colors = [];
    for (let i = 0; i < 25000; i++) {
      const x = THREE.MathUtils.randFloatSpread(3000);
      const y = THREE.MathUtils.randFloatSpread(3000);
      const z = THREE.MathUtils.randFloatSpread(3000);

      vertices.push(x, y, z);

      // Randomize colors 
      const starColors = [0.9, 0.9, 0.7, 1.0]; 
      colors.push(starColors[Math.floor(Math.random() * starColors.length)], starColors[Math.floor(Math.random() * starColors.length)], starColors[Math.floor(Math.random() * starColors.length)], 1);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Add color attribute to the geometry
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
    const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true });
    points.current = new THREE.Points(geometry, material);
    scene.current.add(points.current);

    // Our animation render function
    const animate = function () {
      requestRef.current = requestAnimationFrame(animate);
      points.current.rotation.x += 0.01;
      points.current.rotation.y += 0.01;
      light.current.position.x = Math.sin(Date.now() * 0.0005);
      light.current.position.y = Math.sin(Date.now() * 0.0005);
      light.current.position.z = Math.sin(Date.now() * 0.0005);
      camera.current.lookAt(scene.current.position);
      camera.current.updateMatrixWorld();
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    return () => {
      cancelAnimationFrame(requestRef.current);
      mountCurrent.removeChild(renderer.current.domElement);
    };
  }, [dimensions]);

  // This chunk of Code Keeps Our Screen Responsive
  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return <div ref={mount} style={{ width: '100%', height: '100%' }} />;
};

export default Particles;
