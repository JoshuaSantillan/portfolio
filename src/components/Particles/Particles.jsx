import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const mount = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    // Create Scene and Camera View
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
    camera.position.z = 5;
    // Mount and render scene into with the DOM
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(dimensions.width, dimensions.height);
    const mountCurrent = mount.current;
    mountCurrent.appendChild(renderer.domElement);
    // Adjust the renderer and camera to the size of the mount
    const updateSize = () => {
      const width = mountCurrent.clientWidth;
      const height = mountCurrent.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    // Initial size update
    updateSize();

    const particleMaterial = new THREE.PointsMaterial({
      size: .01,
      sizeAttenuation: true
    })

    // Create Cube Geometry, Mesh and add it to the scene
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const particles = new THREE.Points(geometry, particleMaterial)
//    const material = new THREE.MeshBasicMaterial({ color: '#0C7075' });
//    const cube = new THREE.Mesh(geometry, material);
    scene.add(particles);

    // Our animation render function
    const animate = function () {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.01;
      particles.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    
    // Must remove child when leaving tab or crash
    return () => {
      mountCurrent.removeChild(renderer.domElement);
    };
  }, [dimensions]);

  // eslint-disable-next-line
  {/* This chunk of Code Keeps Our Screen Responsive */}
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return mount to parent component calling this
  return <div ref={mount} style={{ width: '100%', height: '100%' }} />;
};

export default Particles;
