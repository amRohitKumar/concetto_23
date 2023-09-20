import { useEffect } from "react";
// import Registration from "./Registration";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ContentBelow from "./ContentBelow";
import Background from "./Background";
import { Error } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import { init, animate } from "./heroSection";
import Tshirt from "./Tshirt";

init();
animate();

function App() {
  const location = useLocation();

  useEffect(() => {
    // console.log("here ...");
    // Wait for the component to render
    const block = document.querySelector("#canvas_container");
    const parallaxWrapper = document.querySelector(".sponsor");

    // console.log(location);
    if (block) {
      // remove block for pages other then home page
      if (location.pathname !== "/") {
        block.style.display = "none";
      } else {
        block.style.display = "block";
      }
    }

    if (block && parallaxWrapper) {
      // scroll react component only when block is completely scrolled
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
  }, [location.pathname]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route
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
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
