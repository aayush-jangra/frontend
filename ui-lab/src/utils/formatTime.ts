import { CustomTime } from "../schema/gridBoard.schema";

export function formatTime({ hour: h, min: m, sec: s }: CustomTime) {
  const padding = h < 10 ? "0" : "";

  const hour = `${padding}${h}`;
  const min = String(m).padStart(2, "0");
  const sec = String(s).padStart(2, "0");

  return {
    hour,
    min,
    sec,
    time: `${hour}:${min}:${sec}`,
  };
}
