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
        {timerDays} <h6>JOURS</h6>
      </div>
      <div className="col counter-col">
        {timerHours} <h6>HEURES</h6>
      </div>
      <div className="col counter-col">
        {timerMinutes} <h6>MINUTES</h6>
      </div>
    </div>
  );
};

export default Timer;
