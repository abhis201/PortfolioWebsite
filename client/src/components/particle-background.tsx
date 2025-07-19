import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/lib/theme-context';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles for circuit effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000; // Increased particle count
    const posArray = new Float32Array(particlesCount * 3);
    const speedArray = new Float32Array(particlesCount);

    for(let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = Math.random() * 100 - 50;     // X coordinate
      posArray[i + 1] = Math.random() * 100 - 50; // Y coordinate
      posArray[i + 2] = Math.random() * 50 - 25;  // Z coordinate
      speedArray[i/3] = Math.random() * 0.02 + 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('speed', new THREE.BufferAttribute(speedArray, 1));

    // Create lines for circuit connections
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particlesCount * 6);
    for(let i = 0; i < particlesCount * 6; i += 6) {
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      linePositions[i] = x;
      linePositions[i + 1] = y;
      linePositions[i + 2] = 0;
      linePositions[i + 3] = x + (Math.random() - 0.5) * 10;
      linePositions[i + 4] = y + (Math.random() - 0.5) * 10;
      linePositions[i + 5] = 0;
    }
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    // Theme-based colors
    const particleColor = theme === 'dark' ? '#00ff88' : '#0066cc';
    const lineColor = theme === 'dark' ? '#004422' : '#003366';

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: particleColor,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const linesMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);

    scene.add(particlesMesh);
    scene.add(linesMesh);

    camera.position.z = 50;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      particlesMesh.rotation.x += 0.01 * (targetY - particlesMesh.rotation.x);
      particlesMesh.rotation.y += 0.01 * (targetX - particlesMesh.rotation.y);

      linesMesh.rotation.x += 0.01 * (targetY - linesMesh.rotation.x);
      linesMesh.rotation.y += 0.01 * (targetX - linesMesh.rotation.y);

      // Update particle positions
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      const speeds = particlesGeometry.attributes.speed.array as Float32Array;

      for(let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += speeds[i/3];
        if(positions[i + 2] > 25) positions[i + 2] = -25;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-50 opacity-90 pointer-events-none"
      style={{ 
        background: theme === 'dark' 
          ? 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)' 
          : 'linear-gradient(to bottom, #ffffff, #f8fafc)'
      }}
    />
  );
}