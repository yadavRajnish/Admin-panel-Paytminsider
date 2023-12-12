import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [mili, setMili] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [myInterval, setMyInterval] = useState(null);
  const [secInterval, setSecInterval] = useState(null);
  const [minInterval, setMinInterval] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const miliInterval = setInterval(() => {
        setMili((mili) => (mili === 99 ? 0 : mili + 1));
      }, 1);
      const secInterval = setInterval(() => {
        setSec((sec) => (sec === 59 ? 0 : sec + 1));
      }, 1000);
      const minInterval = setInterval(() => {
        setMin((min) => (min === 59 ? 0 : min + 1));
      }, 60000);

      setMyInterval(miliInterval);
      setSecInterval(secInterval);
      setMinInterval(minInterval);
    } else {
      clearInterval(myInterval);
      clearInterval(secInterval);
      clearInterval(minInterval);
    }

    return () => {
      clearInterval(myInterval);
      clearInterval(secInterval);
      clearInterval(minInterval);
    };
  }, [isRunning]);

  function handleButton() {
    setIsRunning(!isRunning);
  }

  function resetButton() {
    setIsRunning(false);
    setMin(0);
    setSec(0);
    setMili(0);
    clearInterval(myInterval);
    clearInterval(secInterval);
    clearInterval(minInterval);
  }

  return (
    <div>
      <div
        style={{
          height: "290px",
          width: "290px",
          borderRadius: "50%",
          border: "3px solid yellow",
          margin: "100px auto",
          background: "black",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center", margin: "25% 0" }}>
          <span style={{ fontSize: "40px", fontWeight: "600" }}>
            {min < 10 ? `0${min}` : min} :{" "}
          </span>
          <span style={{ fontSize: "40px", fontWeight: "600" }}>
            {sec < 10 ? `0${sec}` : sec} :{" "}
          </span>
          <span style={{ fontSize: "40px", fontWeight: "600" }}>
            {mili <= 10 ? `0${mili}` : mili}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            transform: "translateY(-110%)",
          }}
        >
          <button
            style={{ fontSize: "20px", fontWeight: "600" }}
            onClick={handleButton}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            style={{ fontSize: "20px", fontWeight: "600" }}
            onClick={resetButton}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
