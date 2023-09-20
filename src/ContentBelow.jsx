import React from "react";
import { SponsorsList } from "./SponsorList";
import Footer from "./footer/Footer";
import "./styles1.css";

const allSponsors = [];

SponsorsList.forEach((sponsor, idx) => {
  allSponsors.push(
    <span key={idx}>
      <img src={sponsor.img} alt="sponsor poster" className="style"></img>
    </span>
  );
});

const ContentBelow = () => {
  return (
    <div className="sponsor">
      <h1
        style={{
          margin: "0",
          fontFamily: "'Goldman', cursive",
          color: "white",
          padding: "5%",
        }}
      >
        PAST SPONSORS
      </h1>
      <center>
        <div>{allSponsors}</div>
      </center>
      <Footer />
    </div>
  );
};

export default ContentBelow;
