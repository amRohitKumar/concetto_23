import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Headline from './Headline';

import './StarryBackground.css';

const Stars = () => {
  const starsRef = useRef();

  const generateStars = () => {
    const stars = new THREE.Group();

    const starGeometry = new THREE.SphereGeometry(0.1, 10, 10);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 5000; i++) {
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      starMesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      starMesh.scale.set(Math.random(), Math.random(), Math.random());
      stars.add(starMesh);
    }

    return stars;
  };

  const stars = generateStars();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    stars.rotation.x = elapsedTime * 0.1;
    stars.rotation.y = elapsedTime * 0.1;
  });

  return <primitive ref={starsRef} object={stars} />;
};

const ContentOverflow = () => {
  return (
    <Headline/>
  )
}

const StarryBackground = () => {
  return (
    <div className="app-container">
      <div className="background-container">
        <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={1} />
          <pointLight position={[0, 0, 0]} />
          <Stars />
          <group rotation={[0, 0, 0]}>{/* Add your scene content here */}</group>
        </Canvas>
        <div className="content-overlay">
          <ContentOverflow/>
        </div>
      </div>
    </div>
  );
};

export default StarryBackground;
