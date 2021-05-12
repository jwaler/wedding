import React, { useEffect, useRef, useState } from "react";
import "./../App.css";
// Timer App
const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  //method to set the clock
  const startTimer = () => {
    const countdownDate = new Date("Sept 03, 2021 15:30:00").getTime();
    interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        // setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //componentdidMount
  useEffect(() => {
    startTimer();
    return () => {
      // clearInterval(interval.current);
    };
  });

  return (
    <div className="row timer-row">
      <div className="col counter-col">
        <div className="datetimer">{timerDays} </div>
        <div className="datetimerdesc">DAYS</div>
      </div>
      <div className="col counter-col">
        <div className="datetimer">{timerHours} </div>
        <div className="datetimerdesc">HOURS</div>
      </div>
      <div className="col counter-col">
        <div className="datetimer">{timerMinutes} </div>
        <div className="datetimerdesc">MINUTES</div>
      </div>
    </div>
  );
};

export default Timer;
