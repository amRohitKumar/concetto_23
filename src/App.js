import { useEffect } from "react";
import Registration from "./Registration";
import "./App.css";
import ThreeJSBackground from "./ThreeJSBackground";
import ContentBelow from "./ContentBelow";
import Headline from "./Headline";
import Background from "./Background";
import Footer from "./footer/Footer"; 

import { init, animate } from "./heroSection";

init();
animate();

function App() {
  useEffect(() => {
    // console.log("here ...");
    // Wait for the component to render
    const block = document.querySelector("#canvas_container");
    const parallaxWrapper = document.querySelector(".sponsor");

    if (block && parallaxWrapper) {
      const scrollTriggerPoint = block.offsetTop + block.offsetHeight;
      const handleScroll = () => {
        if (window.scrollY >= scrollTriggerPoint) {
          parallaxWrapper.style.overflow = "auto";
        } else {
          parallaxWrapper.style.overflow = "hidden";
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="App">
      <div id="targetSection">
        <Background />
        <div className="parallax-content">
          <ContentBelow />
        </div>
      </div>
    </div>
  );
}

export default App;
