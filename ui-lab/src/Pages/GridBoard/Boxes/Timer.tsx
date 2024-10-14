import { useCallback, useEffect, useRef, useState } from "react";
import { CustomTime } from "../../../schema/gridBoard.schema";
import { formatTime } from "../../../utils/formatTime";
import audio from "../../../resources/audio/timer-finish.mp3";
import { useSnackbar } from "../../../Components/Snackbar";

export const Timer = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState<CustomTime>({ hour: 0, min: 5, sec: 0 });
  const [timerTime, setTimerTime] = useState<CustomTime>({
    hour: 0,
    min: 5,
    sec: 0,
  });
  const timerEndTime = useRef<number | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const timerFinishSound = useRef<HTMLAudioElement | null>(null);
  const { createSnackbar } = useSnackbar();

  const calculateTime = useCallback(() => {
    if (!timerEndTime.current) return;

    const diff = Math.floor((timerEndTime.current - Date.now()) / 1000);

    // Timer completed
    if (diff < 0) {
      setCompleted(true);
      stopTimer();
      setTime({ hour: 0, min: 0, sec: 0 });
      return;
    } else if (diff < 11 && !timerFinishSound.current) {
      timerFinishSound.current = new Audio(audio);
      timerFinishSound.current.currentTime = 11 - diff;
      timerFinishSound.current.play().catch((error) => {
        console.log("Error playing sound:", error);
      });
    }

    const s = diff % 60;
    const m = Math.floor(diff / 60) % 60;
    const h = Math.floor(diff / 3600);

    setTime((prev) => {
      const { hour, min, sec } = prev;

      if (hour !== h || min !== m || sec !== s) {
        return { hour: h, min: m, sec: s };
      }

      return prev;
    });
  }, []);

  function changeTimer(flow: "inc" | "dec", unit: "hour" | "min" | "sec") {
    const diff = flow === "inc" ? 1 : -1;

    setTimerTime((prev) => {
      if (unit === "hour") return { ...prev, hour: prev.hour + diff };
      if (unit === "min") return { ...prev, min: (prev.min + diff + 60) % 60 };
      return { ...prev, sec: (prev.sec + diff + 60) % 60 };
    });
  }

  function startTimer() {
    if (timerTime.hour === 0 && timerTime.min === 0 && timerTime.sec === 0) {
      createSnackbar("Invalid timer");
      return;
    }
    setStarted(true);
    setTime({ ...timerTime });
    timerEndTime.current =
      Date.now() +
      (timerTime.hour * 60 * 60 + timerTime.min * 60 + timerTime.sec) * 1000;
    intervalId.current = setInterval(calculateTime, 200);
  }

  function resumeTimer() {
    setStarted(true);
    timerEndTime.current =
      Date.now() + (time.hour * 60 * 60 + time.min * 60 + time.sec) * 1000;
    intervalId.current = setInterval(calculateTime, 200);
    if (timerFinishSound.current) {
      timerFinishSound.current.play();
    }
  }

  function stopTimer() {
    if (timerFinishSound.current) {
      timerFinishSound.current.pause();
      timerFinishSound.current = null;
    }
    setStarted(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  function resetTimer() {
    setCompleted(false);
    stopTimer();
    timerEndTime.current = null;
    setTime({ ...timerTime });
  }

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white/75 rounded-lg p-2 flex flex-col gap-2 overflow-auto h-full">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg text-3xl p-2">
        {timerEndTime.current === null ? (
          (() => {
            const { hour, min, sec } = formatTime({ ...timerTime });
            return (
              <div className="flex gap-1 items-center">
                <div className="flex flex-col items-center justify-center">
                  <button
                    onClick={() => changeTimer("inc", "hour")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                  {hour}
                  <button
                    onClick={() => changeTimer("dec", "hour")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                </div>
                :
                <div className="flex flex-col items-center justify-center">
                  <button
                    onClick={() => changeTimer("inc", "min")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                  {min}
                  <button
                    onClick={() => changeTimer("dec", "min")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                </div>
                :
                <div className="flex flex-col items-center justify-center">
                  <button
                    onClick={() => changeTimer("inc", "sec")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                  {sec}
                  <button
                    onClick={() => changeTimer("dec", "sec")}
                    className="rounded-full h-4 w-4 bg-gray-300 hover:bg-gray-600"
                  ></button>
                </div>
              </div>
            );
          })()
        ) : (
          <>{formatTime({ ...time }).time}</>
        )}
      </div>
      <div className="flex items-center justify-around font-semibold">
        {!completed && (
          <button
            type="button"
            className={`${
              started
                ? "bg-red-400 hover:bg-red-600"
                : "bg-blue-400 hover:bg-blue-600"
            } py-1 px-2 rounded-lg w-full max-w-20 transition-all duration-500`}
            onClick={
              started
                ? stopTimer
                : timerEndTime.current !== null
                ? resumeTimer
                : startTimer
            }
          >
            {started
              ? "Pause"
              : timerEndTime.current !== null
              ? "Resume"
              : "Start"}
          </button>
        )}
        {timerEndTime.current !== null && (
          <button
            type="button"
            className="border-blue-800 hover:bg-blue-200 border py-1 px-2 rounded-lg w-full max-w-20 transition-all duration-500"
            onClick={resetTimer}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
