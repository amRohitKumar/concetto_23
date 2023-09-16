import { useEffect } from "react";
// import Registration from "./Registration";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ContentBelow from "./ContentBelow";
import Background from "./Background";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import { createBrowserHistory } from 'history';
import { init, animate } from "./heroSection";
import Tshirt from "./Tshirt";
function RouteChangeHandler() {
  const location = useLocation();
  // console.log(location.pathname);
  if (location.pathname !== "/") {
    document.getElementById("canvas_container").style.display = "none";
  } else {
    document.getElementById("canvas_container").removeAttribute("display");
  }

  return null; // This component doesn't render anything
}

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
    <>
      <RouteChangeHandler />
      <Toaster />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <div id="targetSection">
                <Background />
                <div className="parallax-content">
                  <ContentBelow />
                </div>
              </div>
            </div>
          }
        />
        <Route exact path="/tshirt" element={<Tshirt />} />
      </Routes>
    </>
  );
}

export default App;
