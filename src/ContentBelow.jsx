import React from "react";
import { SponsorsList } from "./SponsorList";
import { Build, Title } from "@mui/icons-material";
import "./styles1.css";

const allSponsors = [];

SponsorsList.forEach((sponsor, idx) => {
  allSponsors.push(
    <span key={idx}>
      <a href={sponsor.link}>
        <img src={sponsor.img} alt="sponsor poster" className="style"></img>
      </a>
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
        <div>
          {allSponsors}
        </div>
      </center>
      {/* <center>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Title Sponsor
        </h2>
        <div>{TitleSponsor}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Major Sponsors
        </h2>
        <div>{MajorSponsors}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          General Sponsors
        </h2>
        <div>{GeneralSponsors}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Event Sponsors
        </h2>
        <div>{EventSponsors}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Travel Partner
        </h2>
        <div>{TravelPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Education Partner
        </h2>
        <div>{EducationPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Airlines Partner
        </h2>
        <div>{AirlinesPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Media Partner
        </h2>
        <div>{MediaPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Beverage Partner
        </h2>
        <div>{BeveragePartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Food Partner
        </h2>
        <div>{FoodPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Entertainment Partner
        </h2>
        <div>{EntertainmentPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Coupon Partner
        </h2>
        <div>{CouponPartner}</div>
        <h2
          style={{
            margin: "0",
            fontFamily: "'Goldman', cursive",
            color: "white",
            padding: "0%",
          }}
        >
          Build-a-bit Sponsors
        </h2>
        <div>{BuildABitSponsors}</div>
      </center> */}
    </div>
  );
};

export default ContentBelow;
