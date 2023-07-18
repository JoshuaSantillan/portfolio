import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import 'lodash';

const Particles = () => {
  const mount = useRef();
  const renderer = useRef();
  const scene = useRef();
  const points = useRef();
  const camera = useRef();
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

    // Mount and render scene into with the DOM
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(dimensions.width, dimensions.height);
    const mountCurrent = mount.current;
    mountCurrent.appendChild(renderer.current.domElement);

    // Adjust the renderer and camera to the size of the mount
    const updateSize = () => {
      const width = mountCurrent.clientWidth;
      const height = mountCurrent.clientHeight;
      renderer.current.setSize(width, height, false);
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
    };
    // Initial size update
    updateSize();

    const vertices = [];
    for (let i = 0; i < 20000; i++) {
      const x = THREE.MathUtils.randFloatSpread(3000);
      const y = THREE.MathUtils.randFloatSpread(3000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      vertices.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: '#ADD8E6' });
    points.current = new THREE.Points(geometry, material);
    scene.current.add(points.current);

    // Our animation render function
    const animate = function () {
      requestRef.current = requestAnimationFrame(animate);
      points.current.rotation.x += 0.01;
      points.current.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    // Must remove child when leaving tab or crash
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

  // Return mount to the parent component calling this
  return <div ref={mount} style={{ width: '100%', height: '100%' }} />;
};

export default Particles;
