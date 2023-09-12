import { useEffect } from "react";
import * as THREE from "three";

const MovingStarsBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".background-container1");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    const stars = [];

    function addSphere(stars, scene) {
      // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
      for (var z = -1000; z < 1000; z += 20) {
        // Make a sphere (exactly the same as before).
        var geometry = new THREE.SphereGeometry(0.5, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var sphere = new THREE.Mesh(geometry, material);
        var sphere2 = new THREE.Mesh(geometry, material);

        // This time we give the sphere random x and y positions between -500 and 500
        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;
        sphere2.position.x = Math.random() * 1000 - 500;
        sphere2.position.y = Math.random() * 1000 - 500;

        // Then set the z position to where it is in the loop (distance of camera)
        sphere.position.z = z;
        sphere2.position.z = z;

        // scale it up a bit
        sphere.scale.x = sphere.scale.y = 2;
        sphere2.scale.x = sphere.scale.y = 2;

        //add the sphere to the scene
        scene.add(sphere);
        scene.add(sphere2);

        //finally push it to the stars array
        stars.push(sphere);
        stars.push(sphere2);
      }
    }

    function animateStars() {
      // loop through each star
      for (var i = 0; i < stars.length; i++) {
        var star = stars[i];

        // and move it forward dependent on the mouseY position.
        star.position.z += i / 10;

        // if the particle is too close move it to the back
        if (star.position.z > 1000) star.position.z -= 2000;
      }
    }

    function render() {
      //get the frame
      requestAnimationFrame(render);

      //render the scene
      renderer.render(scene, camera);
      animateStars();
    }

    addSphere(stars, scene);
    render();
  });

  return <div className="background-container1" />;
};

export default MovingStarsBackground;
