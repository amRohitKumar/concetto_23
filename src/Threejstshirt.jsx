import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import Form from "./tshirtform";
import AlertDialog from "./Instructions";

const ThreeJSBackgroun = () => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  // const stars = [];

  useEffect(() => {
    // Set up the scene, camera, and renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a star geometry and material
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.001,
    });

    // Generate random star positions that fill the screen vertically
    const starsVertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 5;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 5;
      starsVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    // Create a star field
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Set initial camera position
    camera.position.z = 4;

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move stars from top to bottom by decrementing their z-coordinates
      starField.geometry.attributes.position.array.forEach(
        (position, index) => {
          if (index % 3 === 2) {
            position -= 0.01;
            if (position < 0) {
              position = 5;
            }
          }
          starField.geometry.attributes.position.array[index] = position;
        }
      );

      starField.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <div 
      ref={containerRef}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      
    ><AlertDialog/>
      <div className="parallax-content mt-3"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
       
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background
          color: "white", // Set text color to white,
          width: "100%",
        }}
      >
        <Form />
      </div>
    </div>
  );
};

export default ThreeJSBackgroun;
