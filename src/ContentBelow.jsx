import React from 'react';
import { SponsorsList } from "./SponsorList";
import { Build, Title } from '@mui/icons-material';
import './styles1.css';

let TitleSponsor = [];

let MajorSponsors = [];

let GeneralSponsors = [];

let EventSponsors = [];

let TravelPartner = [];

let EducationPartner = [];

let AirlinesPartner = [];

let MediaPartner = [];

let BeveragePartner = [];

let FoodPartner = [];

let EntertainmentPartner = [];

let CouponPartner = [];

let BuildABitSponsors = [];

SponsorsList.forEach(sponsor=>{
    if(sponsor.is_title) {
        TitleSponsor.push(<a href={sponsor.link}><img src={sponsor.img} style={{"width":"30%", "padding":"2%"}}></img></a>)
    }
    else if(sponsor.cat=="Major Sponsors") {
        MajorSponsors.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="General Sponsors") {
        GeneralSponsors.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Event Sponsors") {
        EventSponsors.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Travel Partner") {
        TravelPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Education Partner") {
        EducationPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Airlines Partner") {
        AirlinesPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img}  className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Media Partner") {
        MediaPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Beverage Partner") {
        BeveragePartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Food Partner") {
        FoodPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Entertainment Partner") {
        EntertainmentPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Coupon Partner") {
        CouponPartner.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
    else if(sponsor.cat=="Build-a-bit Sponsors") {
        BuildABitSponsors.push(<span>
            <a href={sponsor.link}><img src={sponsor.img} className="style"></img></a>
        </span>)
    }
})

const ContentBelow = () => {
  return (
    <div className="sponsor">
      <h1 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"5%"}}>PAST SPONSORS</h1>
      <center>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Title Sponsor</h2>
        {TitleSponsor}
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Major Sponsors</h2>
        <div>
            {MajorSponsors}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>General Sponsors</h2>
        <div>
            {GeneralSponsors}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Event Sponsors</h2>
        <div>
            {EventSponsors}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Travel Partner</h2>
        <div>
            {TravelPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Education Partner</h2>
        <div>
            {EducationPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Airlines Partner</h2>
        <div>
            {AirlinesPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Media Partner</h2>
        <div>
            {MediaPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Beverage Partner</h2>
        <div>
            {BeveragePartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Food Partner</h2>
        <div>
            {FoodPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Entertainment Partner</h2>
        <div>
            {EntertainmentPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Coupon Partner</h2>
        <div>
            {CouponPartner}
        </div>
        <h2 style={{"margin":"0", "fontFamily": "'Goldman', cursive", "color": "white", "padding":"0%"}}>Build-a-bit Sponsors</h2>
        <div>
            {BuildABitSponsors}
        </div>
      </center>
    </div>
  );
};

export default ContentBelow;

