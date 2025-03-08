import { useRef, useState } from "react";
import "./memoryGameStyles.css";

const generateRandomGrid = (size) => {
  const randomGrid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "")
  );

  const maxSize = (size * size) / 2;
  const remainingElements = [
    ...Array.from({ length: maxSize }, (_, index) => index + 1),
    ...Array.from({ length: maxSize }, (_, index) => index + 1),
  ];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const randomIndex = Math.floor(
        Math.random() * (remainingElements.length - 1)
      );

      randomGrid[i][j] = remainingElements[randomIndex];

      remainingElements.splice(randomIndex, 1);
    }
  }

  return randomGrid;
};

export const MemoryGame = ({ size }) => {
  const initialGrid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false)
  );
  const [grid, setGrid] = useState(initialGrid);
  const gridValues = useRef(generateRandomGrid(size));
  const recentFlippedTiles = useRef([]);
  const isReverting = useRef(false);
  const [turns, setTurns] = useState(0);

  const resetGame = () => {
    setGrid(initialGrid);
    gridValues.current = generateRandomGrid(size);
    recentFlippedTiles.current = [];
    isReverting.current = false;
    setTurns(0);
  };

  const showTile = (rowIdx, colIdx) => {
    setGrid((prev) => {
      const gridCopy = [...prev.map((row) => [...row])];

      gridCopy[rowIdx][colIdx] = true;

      return gridCopy;
    });
    recentFlippedTiles.current.push([rowIdx, colIdx]);

    if (recentFlippedTiles.current.length === 2) {
      setTurns((prev) => prev + 1);
      const tileOne = recentFlippedTiles.current[0];
      const tileTwo = recentFlippedTiles.current[1];

      const matching =
        gridValues.current[tileOne[0]][tileOne[1]] ===
        gridValues.current[tileTwo[0]][tileTwo[1]];

      if (!matching) {
        isReverting.current = true;
        setTimeout(() => {
          setGrid((prev) => {
            const gridCopy = [...prev.map((row) => [...row])];

            gridCopy[tileOne[0]][tileOne[1]] = false;
            gridCopy[tileTwo[0]][tileTwo[1]] = false;

            isReverting.current = false;

            return gridCopy;
          });
        }, [1000]);
      }

      recentFlippedTiles.current = [];
    }
  };

  return (
    <div className="memory-game-container">
      <div
        className="memory-grid-container"
        style={{
          gridTemplateRows: `repeat(${size}, 1fr)`,
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <button
              disabled={isReverting.current}
              onClick={cell ? undefined : () => showTile(rowIdx, colIdx)}
              key={`${rowIdx}-${colIdx}`}
              className="memory-cell"
              style={{ background: cell ? "lightGreen" : "" }}
            >
              {cell ? gridValues.current[rowIdx][colIdx] : "?"}
            </button>
          ))
        )}
      </div>
      <div>
        <div>Turns: {turns}</div>
        <button className="memory-reset-button" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
};
