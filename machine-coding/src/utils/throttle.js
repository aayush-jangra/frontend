import { useRef } from "react";

export const useThrottle = (fn, limit) => {
  let lastCall = useRef(0);

  return (...args) => {
    const now = Date.now();

    if (now - lastCall.current > limit) {
      fn(...args);
      lastCall.current = now;
    }
  };
};
