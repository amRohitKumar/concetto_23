import { useState, useEffect } from "react";
import Headline from "./Headline";
import "./StarryBackground.css";
import { init, animate } from "./heroSection.js";

// init()
// animate()

const ContentOverflow = () => {
  return <Headline />;
};

const StarryBackground = () => {
  
  return (
      <div className="content-overlay">
        <ContentOverflow />
      </div>
  );
};

export default StarryBackground;

/**
 * <div className="content-overlay">
          <ContentOverflow/>
        </div>
 */
