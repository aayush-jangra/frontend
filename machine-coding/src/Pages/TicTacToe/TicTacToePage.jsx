import { useState } from "react";
import { TicTacToe } from "./TicTacToe";

export const TicTacToePage = () => {
  const [size, setSize] = useState(3);

  const handleSizeChange = (e) => {
    if (e.target.value > 0 && e.target.value < 10) {
      setSize(e.target.value);
    }
  };

  return (
    <div className="tic-tac-toe-page-container">
      <label className="tic-tac-toe-label">
        Grid size (1-9):
        <input type="number" value={size} onChange={handleSizeChange} />
      </label>
      <TicTacToe size={size} />
    </div>
  );
};
