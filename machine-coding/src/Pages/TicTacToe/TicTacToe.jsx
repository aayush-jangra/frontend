import { useEffect, useRef, useState } from "react";
import "./ticTacToeStyles.css";
import { useTicTacToeValidation } from "./useTicTacToeValidation";

export const TicTacToe = ({ size }) => {
  const [grid, setGrid] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ""))
  );
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const emptyCells = useRef(size * size);

  const performValidation = useTicTacToeValidation(size);

  const markCell = (ri, ci) => {
    if (grid[ri][ci] !== "") return;

    setGrid((_) => {
      const gridCopy = [...grid.map((row) => [...row])];

      gridCopy[ri][ci] = turn;

      setTurn((prev) => {
        if (prev === "X") return "O";

        return "X";
      });

      const result = performValidation(gridCopy);

      if (result === "X" || result === "O") {
        setWinner(result);
      }

      return gridCopy;
    });
    emptyCells.current--;
    if (emptyCells.current === 0) {
      setWinner("-");
    }
  };

  const resetGrid = () => {
    setGrid(
      Array.from({ length: size }, () => Array.from({ length: size }, () => ""))
    );
    setTurn("X");
    setWinner("");
    emptyCells.current = size * size;
  };

  useEffect(() => {
    resetGrid();
  }, [size]);

  return (
    <div className="tic-tac-toe-container">
      <div
        style={{
          gridTemplateRows: `repeat(${size}, 1fr)`,
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          maxWidth: `${size * 64}px`,
        }}
        className="tic-tac-toe-grid-container"
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              style={{
                background:
                  cell === "X" ? "lightBlue" : cell === "O" ? "lightGreen" : "",
              }}
              key={`${size}-${rowIdx}-${colIdx}`}
              className="tic-tac-toe-cell"
              onClick={!!winner ? undefined : () => markCell(rowIdx, colIdx)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <button className="tic-tac-toe-reset-button" onClick={resetGrid}>
        Reset
      </button>
      {winner && <h1>{winner === "-" ? "Game tied" : `Winner: ${winner}`}</h1>}
    </div>
  );
};
