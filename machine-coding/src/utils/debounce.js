import { useRef } from "react";

export const useDebounce = (fn, delay) => {
  let timer = useRef();

  return (...args) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
