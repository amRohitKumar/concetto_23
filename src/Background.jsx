import React, { Component } from 'react';
import * as THREE from 'three';

class MovingStarsBackground extends Component {
  componentDidMount() {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // Create a star field with moving stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

    const starsVertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = -Math.random() * 100; // Adjust the depth for stars to move into the screen
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Position the camera and set the viewport height
    camera.position.z = 5;
    camera.position.y = 0; // Adjust camera height if needed

    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Move stars toward the viewer by decreasing their z-positions
      stars.position.z += 0.1;

      // Check if stars have gone beyond a certain depth, and reset their positions
      if (stars.position.z >= 0) {
        stars.position.z = -10; // Reset z-positions of stars
      }

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <div className="background-container1" ref={ref => (this.mount = ref)}></div>
    );
  }
}

export default MovingStarsBackground;