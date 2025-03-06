import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "./progressBarStyles.css";

const MAX_VALUE = 100;

export const ProgressBarPage = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const interval = useRef();

  useEffect(() => {
    return () => {
      if (interval && !!interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, []);

  const startLoading = () => {
    if (!interval || !interval.current) {
      interval.current = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev >= MAX_VALUE) {
            clearInterval(interval.current);
            interval.current = null;
          }
          return Math.min(MAX_VALUE, prev + 10);
        });
      }, 500);
    }
  };

  const pauseLoading = () => {
    if (interval && !!interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const resetLoading = () => {
    if (interval && !!interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
    setCurrentValue(0);
  };

  return (
    <div className="progress-page-container">
      <ProgressBar currentValue={currentValue} maxValue={MAX_VALUE} />
      <button className="progress-button" onClick={startLoading}>
        Start
      </button>
      <button className="progress-button" onClick={pauseLoading}>
        Pause
      </button>
      <button className="progress-button" onClick={resetLoading}>
        Reset
      </button>
    </div>
  );
};
