import { useState } from "react";
import { useThrottle } from "../../utils/throttle";

export const Throttle = () => {
  const [clicks, setClicks] = useState(0);

  const updateFunction = () => {
    setClicks((prev) => prev + 1);
  };

  const throttleUpdateFunction = useThrottle(updateFunction, 500);

  const handleClick = () => {
    throttleUpdateFunction();
  };

  return (
    <div className="throttle-container">
      <button className="throttle-button" onClick={handleClick}>
        Click me
      </button>
      <div>{!!clicks && <div>Total Clicks: {clicks}</div>}</div>
    </div>
  );
};
