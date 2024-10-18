import { useCallback, useEffect, useRef, useState } from "react";
import { CustomTime } from "../../../schema/gridBoard.schema";
import { formatTime } from "../../../utils/formatTime";

export const Stopwatch = () => {
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState<CustomTime>({ hour: 0, min: 0, sec: 0 });
  const [laps, setLaps] = useState<CustomTime[]>([]);
  const initialTime = useRef<number | null>(null);
  const elapsedTime = useRef<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const calculateTime = useCallback(() => {
    if (!initialTime.current) return;

    const diff = Math.floor((Date.now() - initialTime.current) / 1000);
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

  function startWatch() {
    setStarted(true);
    initialTime.current = Date.now() - elapsedTime.current;
    intervalId.current = setInterval(calculateTime, 500);
  }

  function stopWatch() {
    if (initialTime.current) {
      elapsedTime.current = Date.now() - initialTime.current;
    }
    setStarted(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }

  function resetWatch() {
    initialTime.current = null;
    elapsedTime.current = 0;
    setTime({ hour: 0, min: 0, sec: 0 });
    setLaps([]);
  }

  function addLap() {
    setLaps((prev) => [{ ...time }, ...prev]);
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
    <div className="overflow-auto h-full flex flex-col gap-4 p-2">
      <div className="bg-white/75 rounded-lg p-2 flex flex-col gap-2">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg text-3xl p-2">
          {formatTime({ ...time }).time}
        </div>
        <div className="flex items-center justify-around font-semibold">
          <button
            type="button"
            className={`${
              started
                ? "bg-red-400 hover:bg-red-600"
                : "bg-blue-400 hover:bg-blue-600"
            } py-1 px-2 rounded-lg w-full max-w-20 transition-all duration-500`}
            onClick={started ? stopWatch : startWatch}
          >
            {started ? "Stop" : "Start"}
          </button>
          <button
            type="button"
            className={`${
              started
                ? "border-blue-800 hover:bg-blue-200"
                : "border-gray-800 hover:bg-gray-200"
            } border py-1 px-2 rounded-lg w-full max-w-20 transition-all duration-500`}
            onClick={started ? addLap : resetWatch}
          >
            {started ? "Lap" : "Reset"}
          </button>
        </div>
      </div>
      <div className="ml-4">
        {laps.map((lap) => {
          return (
            <div className="italic font-semibold text-text-subtitle">
              {formatTime({ ...lap }).time}
            </div>
          );
        })}
      </div>
    </div>
  );
};
