import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const Spectrogram = () => {
  const mount = useRef();
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true }));
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const analyserRef = useRef();
  const dataArrayRef = useRef();
  const requestRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    // Request microphone access
    if (navigator.mediaDevices.getUserMedia) {
      console.log('Asking for microphone permission...');
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
          console.log('Permission Granted');
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser);
          // If you want to hear the audio you can also connect the source to the context's destination
          // source.connect(audioContext.destination);
        })
        .catch(function(err) {
          console.error('Error accessing the microphone', err);
        });
    }
    // Visualization setup
    const bars = [];
    const barMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const barWidth = dimensions.width / dataArrayRef.current.length;
    const barMaxHeight = 5; // Maximum height of bars
    for (let i = 0; i < dataArrayRef.current.length; i++) {
        const barGeometry = new THREE.PlaneGeometry(barWidth, 1, 1);
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.x = (i - dataArrayRef.current.length / 2) * barWidth / 100;
        bar.position.y = -dimensions.height / 4; // Adjust based on your scene setup
        scene.current.add(bar);
        bars.push(bar);
    }
    camera.current.position.z = 5;
    renderer.current.setSize(dimensions.width, dimensions.height);
    mount.current.appendChild(renderer.current.domElement);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      // TODO: Visualization update based on dataArrayRef.current
      requestRef.current = requestAnimationFrame(animate);
      analyser.getByteFrequencyData(dataArrayRef.current);
  
      // Update bars
      for (let i = 0; i < bars.length; i++) {
          const value = dataArrayRef.current[i]; // Amplitude of frequency
          const scale = value / 128.0; // Normalize and scale. Adjust as needed
          bars[i].scale.y = scale * barMaxHeight; // Adjust bar height
      }
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.current.domElement);
    };
  }, [dimensions]);

  useEffect(() => {
    renderer.current.setSize(dimensions.width, dimensions.height);
    camera.current.aspect = dimensions.width / dimensions.height;
    camera.current.updateProjectionMatrix();
  }, [dimensions]);

  return <div ref={mount} style={{ width: '100%', height: '100%' }} />;
};

export default Spectrogram;
