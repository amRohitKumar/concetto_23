import React from "react";
import Countdown from 'react-countdown';

function Count() {

    const date1 = new Date()
    date1.setFullYear(2023, 9, 13);
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    const date2 = new Date();

    let difference = date1.getTime() - date2.getTime();

    const renderer = ({days,  hours, minutes, seconds, completed }) => {
        if (completed) {
          return <></>;
        } else {
          return <h4 style={{"fontFamily": "'Goldman', cursive", "margin": "1% 0", "color":"lightGreen"}}>{days} DAYS : {hours} HOURS : {minutes} MINUTES : {seconds} SECONDS REMAINING</h4>;
        }
    };

    return (
        <Countdown 
            date = {Date.now() + difference}
            renderer = {renderer}
        />
    )
}

export default Count;