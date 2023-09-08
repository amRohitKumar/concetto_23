import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Count from "./Countdown";

const style = {
    fontFamily:"'Bungee Inline', cursive",
    fontSize: "280%",
    margin: "5%"
}

const image_style = {
    height: "20%",
    width: "30%"
}

function Headline() {

    const scrollToSection = () => {
        const targetSection = document.getElementById('targetSection');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <img src="Concetto Full Logo.png" style={image_style}></img><br></br>
            <p><h2 style={style}>C
            <Typewriter
                words={["ONCETTO' 23. COMING SOON."]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </h2></p>
            <Count/>
            <h3 style={{"fontFamily": "'Goldman', cursive"}}>THE ANNUAL TECHNO-MANAGEMENT FEST OF IIT (ISM) DHANBAD.</h3><br></br>
            <h2 style={{"fontFamily": "'Goldman', cursive", "color": "red"}}>13 - 15 OCTOBER 2023</h2>
            <button onClick={scrollToSection} style={{"backgroundColor":"transparent", "color":"white", "border":"0", "cursor":"pointer"}}><KeyboardDoubleArrowDownIcon style={{"fontSize":"400%"}}/></button>
        </>
    )
}

export default Headline;
