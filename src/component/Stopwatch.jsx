import React, { useEffect, useState } from "react";
import './Stopwatch.css';
const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [stop, setStope] = useState(false);

  const onStart = () => {
    setStope(true);
  };
  const onStop = () => {
    setStope(false);
  };
  const onReset = () => {
    setHours(0);
    setMin(0);
    setSec(0);
    setMsec(0);
  };

  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        if (msec < 99) {
          setMsec(msec + 1);
          clearInterval(interval);
        }
        if (msec >= 99) {
          setSec(sec + 1);
          setMsec(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          clearInterval(interval);
        }
        if (min > 59) {
          setHours(hours + 1);
          setMsec(0);
          clearInterval(interval);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="Outer">
        <div className="Outer2">
      <h1>STOPWATCH</h1>
      <h2>
        {hours} : {min} : {sec} : {msec}
      </h2>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
