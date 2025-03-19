import { useState } from "react";
import "./virtualisedStyles.css";

export const VirtualisedList = ({ list, height = 400, itemHeight = 50 }) => {
  const [indices, setIndices] = useState({
    start: 0,
    end: Math.floor(height / itemHeight),
  });
  const completeHeight = (list.length + 2) * itemHeight;

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + Math.floor(height / itemHeight);

    setIndices({ start: startIndex, end: endIndex });
  };

  return (
    <div>
      <div onScroll={handleScroll} style={{ height, overflowY: "scroll" }}>
        <div
          className="virtualised-container"
          style={{ height: completeHeight }}
        >
          {list.slice(indices.start, indices.end).map((item, index) => (
            <div
              key={index}
              className="virtualised-item"
              style={{
                minHeight: itemHeight,
                maxHeight: itemHeight,
                transform: `translateY(${indices.start * itemHeight}px)`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
