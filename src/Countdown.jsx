import React from "react";
import Countdown from 'react-countdown';
import './styles1.css';
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
          return <div class="container">
          <div class="time-content">
         <div class="time days">
             <span class="number">{days}</span>
             {/* <span class="text">days</span> */}
         </div>
         <div class="time hours">
             <span class="number">{hours}</span>
             {/* <span class="text">hours</span> */}
         </div>
         <div class="time minutes">
             <span class="number">{minutes}</span>
             {/* <span class="text">minutes</span> */}
         </div>
         <div class="time seconds">
             <span class="number">{seconds}</span>
             {/* <span class="text">seconds</span> */}
         </div>
     </div>
     </div>
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