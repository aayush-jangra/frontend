import { useState } from "react";
import { TicTacToe } from "./TicTacToe";

const TicTacToePage = () => {
  const [size, setSize] = useState(3);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="tic-tac-toe-page-container">
      <label className="tic-tac-toe-label">
        Grid size (3-9):
        <input
          style={{ minWidth: 200 }}
          type="range"
          min={3}
          max={9}
          value={size}
          onChange={handleSizeChange}
        />
      </label>
      <TicTacToe size={Math.max(size, 3)} />
    </div>
  );
};

export default TicTacToePage;
