import React, { useCallback, useEffect, useRef, useState } from "react";
import "./typewriterStyles.css";

export const TypeWriter = ({ content, loop = false }) => {
  const [text, setText] = useState("");
  const config = useRef({
    index: 0,
    list: Array.isArray(content) ? content : [content],
    direction: "forward",
    length: 1,
  });

  const updateText = useCallback(() => {
    const { index, list, length } = config.current;

    setText(list[index].slice(0, length));

    if (length === list[index].length) {
      if (loop || list.length > 1) {
        config.current.direction = "backward";
      } else {
        config.current.direction = "stop";
      }
    } else if (length === 0) {
      config.current.direction = "forward";
      config.current.index = (index + 1) % list.length;
    }

    if (config.current.direction === "forward") {
      config.current.length++;
    } else if (config.current.direction === "backward") {
      config.current.length--;
    }
  }, [loop]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateText();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [updateText]);

  return (
    <div>
      <div>
        {text}
        <span className="typewriter-slash">|</span>
      </div>
    </div>
  );
};
