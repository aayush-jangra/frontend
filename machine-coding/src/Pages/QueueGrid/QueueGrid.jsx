import { useEffect, useRef, useState } from "react";
import "./queueGridStyles.css";

export const QueueGrid = ({ size = 3 }) => {
  const [boxes, setBoxes] = useState(
    Array.from({ length: size * size }, () => false)
  );
  const queue = useRef([]);
  const [animating, setAnimating] = useState(false);

  const handleClick = (index) => {
    setBoxes((prev) => {
      const nv = [...prev];
      nv[index] = true;

      if (!prev[index]) {
        queue.current.push(index);
      }

      return nv;
    });
  };

  useEffect(() => {
    if (boxes.length !== size * size) {
      setBoxes(Array.from({ length: size * size }, () => false));
      queue.current = [];
    }

    if (queue.current.length === size * size) {
      setAnimating(true);
      queue.current.forEach((boxIndex, index) => {
        setTimeout(() => {
          setBoxes((prev) => {
            const nv = [...prev];
            nv[boxIndex] = false;

            return nv;
          });

          if (index === size * size - 1) {
            setAnimating(false);
          }
        }, 500 * (index + 1));
      });
      queue.current = [];
    }
  }, [queue.current.length, size, boxes.length]);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
        maxWidth: `${size * 64}px`,
      }}
      className="queue-boxes-container"
    >
      {boxes.map((selected, index) => (
        <div
          key={index}
          className={`queue-grid-box ${
            selected ? "queue-grid-box-selected" : ""
          }`}
          onClick={animating ? undefined : () => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};
