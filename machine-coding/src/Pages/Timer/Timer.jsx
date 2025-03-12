import { useEffect, useRef, useState } from "react";
import "./timerStyles.css";

export const Timer = () => {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 10 });
  const [intervalRunning, setIntervalRunning] = useState(false);
  const timerEnd = useRef();
  const intervalRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isNaN(value) || value < 0 || !!timerEnd.current) {
      return;
    }

    if (name === "hour") {
      setTime((prev) => ({ ...prev, hour: value }));
    } else {
      if (value < 60) {
        setTime((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const calculateTime = () => {
    const end = timerEnd.current;
    let remaining = Math.floor((end - Date.now()) / 1000);

    const sec = remaining % 60;

    remaining = Math.floor(remaining / 60);
    const min = remaining % 60;

    remaining = Math.floor(remaining / 60);

    return { hour: remaining, min, sec };
  };

  const startTimer = () => {
    timerEnd.current =
      Date.now() + (time.hour * 60 * 60 + time.min * 60 + +time.sec) * 1000;

    setIntervalRunning(true);

    intervalRef.current = setInterval(() => {
      const newValue = calculateTime();

      if (newValue.hour <= 0 && newValue.min <= 0 && newValue.sec <= 0) {
        resetTimer();
        return;
      }

      setTime(newValue);
    }, [200]);
  };

  const resetTimer = () => {
    setTime({ hour: 0, min: 0, sec: 0 });
    if (intervalRef && intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
      setIntervalRunning(false);
    }
    timerEnd.current = null;
  };

  const pauseTimer = () => {
    if (intervalRef && intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
      setIntervalRunning(false);
    }
  };

  useEffect(() => {
    return () => {
      resetTimer();
    };
  }, []);

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-input-container">
        <input
          className="stopwatch-input"
          name="hour"
          value={time.hour}
          onChange={handleChange}
        />
        :
        <input
          className="stopwatch-input"
          name="min"
          value={time.min}
          onChange={handleChange}
        />
        :
        <input
          className="stopwatch-input"
          name="sec"
          value={time.sec}
          onChange={handleChange}
        />
      </div>
      <div className="stopwatch-buttons-container">
        <button
          className="stopwatch-button"
          onClick={intervalRunning ? pauseTimer : startTimer}
        >
          {intervalRunning ? "Pause" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};
