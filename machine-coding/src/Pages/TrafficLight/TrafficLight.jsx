import { useEffect, useRef, useState } from "react";
import "./trafficLightsStyles.css";

export const TrafficLight = ({ rDuration, gDuration, yDuration }) => {
  const [activeLight, setActiveLight] = useState("red");
  const timerRef = useRef();
  const endTimeRef = useRef();
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActiveLight("green");
    }, rDuration * 1000);
    endTimeRef.current = Date.now() + rDuration * 1000;

    const interval = setInterval(() => {
      const timeRemaining = Math.max(
        0,
        Math.ceil((endTimeRef.current - Date.now()) / 1000)
      );

      setCountDown(timeRemaining);
    }, [200]);

    return () => {
      clearTimeout(timerRef?.current);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (activeLight === "red") {
      endTimeRef.current = Date.now() + rDuration * 1000;
      timerRef.current = setTimeout(() => {
        setActiveLight("green");
      }, rDuration * 1000);
    } else if (activeLight === "green") {
      endTimeRef.current = Date.now() + gDuration * 1000;
      timerRef.current = setTimeout(() => {
        setActiveLight("yellow");
      }, gDuration * 1000);
    } else {
      endTimeRef.current = Date.now() + yDuration * 1000;
      timerRef.current = setTimeout(() => {
        setActiveLight("red");
      }, yDuration * 1000);
    }
  }, [activeLight]);

  return (
    <div className="traffic-lights-container">
      <div
        className={`traffic-light ${activeLight === "red" ? "red-light" : ""}`}
      >
        {countDown}
      </div>
      <div
        className={`traffic-light ${
          activeLight === "yellow" ? "yellow-light" : ""
        }`}
      >
        {countDown}
      </div>
      <div
        className={`traffic-light ${
          activeLight === "green" ? "green-light" : ""
        }`}
      >
        {countDown}
      </div>
    </div>
  );
};
