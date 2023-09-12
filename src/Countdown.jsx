import React from "react";
import Countdown from "react-countdown";
import "./styles1.css";
function Count() {
  const date1 = new Date();
  date1.setFullYear(2023, 9, 13);
  date1.setHours(0);
  date1.setMinutes(0);
  date1.setSeconds(0);
  const date2 = new Date();

  let difference = date1.getTime() - date2.getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    var day1 = days % 10;
    var day0 = (days - day1) / 10;
    var hour0 = hours % 10;
    var hour1 = (hours - hour0) / 10;
    var min1 = minutes % 10;
    var min0 = (minutes - min1) / 10;
    var sec1 = seconds % 10;
    var sec0 = (seconds - sec1) / 10;
    if (completed) {
      return <></>;
    } else {
      return (
        <div id="flipdown" className="flipdown flipdown__theme-dark">
          <div className="rotor-group">
            <div className="rotor-group-heading" data-before="Days"></div>
            <div>
              <div className="rotor">
                <div className="rotor-leaf ">
                  <figure className="rotor-leaf-rear ">{day0}</figure>
                  <figure className="rotor-leaf-front ">{day0}</figure>
                </div>
                <div className="rotor-top">{day0}</div>
                <div className="rotor-bottom">{day0}</div>
              </div>

              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear days1">{day1}</figure>
                  <figure className="rotor-leaf-front days1">{day1}</figure>
                </div>
                <div className="rotor-top days1">{day1}</div>
                <div className="rotor-bottom days1">{day1}</div>
              </div>
            </div>
          </div>
          <div className="rotor-group">
            <div className="rotor-group-heading" data-before="Hours"></div>
            <div>
              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear">{hour1}</figure>
                  <figure className="rotor-leaf-front">{hour1}</figure>
                </div>
                <div className="rotor-top">{hour1}</div>
                <div className="rotor-bottom">{hour1}</div>
              </div>
              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear">{hour0}</figure>
                  <figure className="rotor-leaf-front">{hour0}</figure>
                </div>
                <div className="rotor-top">{hour0}</div>
                <div className="rotor-bottom">{hour0}</div>
              </div>
            </div>
          </div>
          <div className="rotor-group">
            <div className="rotor-group-heading" data-before="Minutes"></div>
            <div>
              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear">{min0}</figure>
                  <figure className="rotor-leaf-front">{min0}</figure>
                </div>
                <div className="rotor-top">{min0}</div>
                <div className="rotor-bottom">{min0}</div>
              </div>
              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear">{min1}</figure>
                  <figure className="rotor-leaf-front">{min1}</figure>
                </div>
                <div className="rotor-top">{min1}</div>
                <div className="rotor-bottom">{min1}</div>
              </div>
            </div>
          </div>
          <div className="rotor-group">
            <div className="rotor-group-heading" data-before="Seconds"></div>
            <div>
              <div className="rotor">
                <div className="rotor-leaf">
                  <figure className="rotor-leaf-rear">{sec0}</figure>
                  <figure className="rotor-leaf-front">{sec0}</figure>
                </div>
                <div className="rotor-top">{sec0}</div>
                <div className="rotor-bottom">{sec0}</div>
              </div>
              <div className="rotor">
                <div className="rotor-leaf flipped">
                  <figure className="rotor-leaf-rear">{sec1}</figure>
                  <figure className="rotor-leaf-front">{sec1}</figure>
                </div>
                <div className="rotor-top">{sec1}</div>
                <div className="rotor-bottom">{sec1}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={Date.now() + difference} renderer={renderer} />;
}

export default Count;
