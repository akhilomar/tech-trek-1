import React, { useState, useEffect } from "react";
import TimeFormat from "hh-mm-ss";

const Timer = (props) => {
  let mainTime;


  const [seconds, setSeconds] = useState(props.time);
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 0) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds(seconds => {
      const updatedSeconds = seconds - 1;
      if (updatedSeconds < 1) {
        stopTimer();
        setTimeout(props.displayQuestion(), 2000);

      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <div
      className="flex flex-column justify-center items-center"
      style={{ height: "40vh" , display: 'flex' , flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center' }}
    >
      <h1 className="flex flex-column" style={{display: 'flex' , flexDirection: 'column'}}>Next Question In</h1>

      <div className="flex " style={{display: 'flex'}}>
        <div className="flex flex-column" style={{ marginRight: "20px" , display: 'flex' , flexDirection: 'column' }}>
          <h1>{h}</h1>
          <span>HRS</span>
        </div>
        <div className="flex flex-column" style={{ marginRight: "20px" , display: 'flex' , flexDirection: 'column' }}>
          <h1>{m}</h1>
          <span>MIN</span>
        </div>
        <div className="flex flex-column" style={{display: 'flex' , flexDirection: 'column'}}>
          <h1>{s}</h1>
          <span>SEC</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
