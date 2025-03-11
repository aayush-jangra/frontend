import { useState } from "react";
import { TicTacToe } from "./TicTacToe";

const TicTacToePage = () => {
  const [size, setSize] = useState(3);

  const handleSizeChange = (e) => {
    if (e.target.value > 0 && e.target.value < 10) {
      setSize(e.target.value);
    }
  };

  return (
    <div className="queue-grid-page-container">
      <label className="queue-grid-label">
        Grid size (1-9):
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <TicTacToe size={size} />
    </div>
  );
};

export default TicTacToePage;
