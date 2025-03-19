import { useEffect, useRef, useState } from "react";
import "./snakeStyles.css";

export const SnakeGame = ({ size }) => {
  const initialValue = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "")
  );
  initialValue[Math.floor(size / 2)][Math.floor(size / 2)] = "head";
  const [grid, setGrid] = useState(initialValue);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const direction = useRef("left");
  const snakePos = useRef([
    { r: Math.floor(size / 2), c: Math.floor(size / 2) },
  ]);
  const intervalRef = useRef();

  const resetGame = () => {
    setGrid(initialValue);
    setRunning(false);
    setGameOver(false);
    setScore(0);
    direction.current = "left";
    snakePos.current = [{ r: Math.floor(size / 2), c: Math.floor(size / 2) }];
    addFruit();
  };

  const outOfBounds = (x, y) => {
    return x < 0 || y < 0 || x >= size || y >= size;
  };

  const moveSnake = () => {
    setGrid((prev) => {
      const gridCopy = [...prev.map((row) => [...row])];

      let { r, c } = snakePos.current[0];
      let newPos = { x: r, y: c - 1 }; // Left
      if (direction.current === "right") {
        newPos = { x: r, y: c + 1 };
      } else if (direction.current === "up") {
        newPos = { x: r - 1, y: c };
      } else if (direction.current === "down") {
        newPos = { x: r + 1, y: c };
      }

      if (
        outOfBounds(newPos.x, newPos.y) ||
        gridCopy[newPos.x][newPos.y] === "body"
      ) {
        setGameOver(true);
        changeStart();
        return gridCopy;
      }

      const isFruit = gridCopy[newPos.x][newPos.y] === "fruit";
      const toAdd = snakePos.current[snakePos.current.length - 1];

      snakePos.current = snakePos.current.map((pos) => {
        const temp = { r: newPos.x, c: newPos.y };

        gridCopy[newPos.x][newPos.y] = gridCopy[pos.r][pos.c];
        gridCopy[pos.r][pos.c] = "";

        newPos.x = pos.r;
        newPos.y = pos.c;

        return temp;
      });

      if (isFruit) {
        snakePos.current.push(toAdd);
        gridCopy[toAdd.r][toAdd.c] = "body";
        addFruit();
        setScore((prev) => prev + 1);
      }

      return gridCopy;
    });
  };

  const addFruit = () => {
    setGrid((prev) => {
      const gridCopy = [...prev.map((row) => [...row])];

      let x, y;

      do {
        x = Math.floor(Math.random() * size);
        y = Math.floor(Math.random() * size);
      } while (gridCopy[x][y] !== "");

      gridCopy[x][y] = "fruit";

      return gridCopy;
    });
  };

  const changeStart = () => {
    setRunning((prev) => {
      if (prev) {
        clearInterval(intervalRef.current);
        return false;
      }
      intervalRef.current = setInterval(() => {
        moveSnake();
      }, [300]);
      return true;
    });
  };

  useEffect(() => {
    addFruit();

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        if (direction.current !== "left") direction.current = "right";
      } else if (e.key === "ArrowLeft") {
        if (direction.current !== "right") direction.current = "left";
      } else if (e.key === "ArrowUp") {
        if (direction.current !== "down") direction.current = "up";
      } else if (e.key === "ArrowDown") {
        if (direction.current !== "up") direction.current = "down";
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (intervalRef && intervalRef.current)
        clearInterval(intervalRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="snake-game-container">
      <div className="snake-controls">
        {gameOver ? (
          <button onClick={resetGame}>Reset</button>
        ) : (
          <button onClick={changeStart}>{running ? "Pause" : "Start"}</button>
        )}
        <>Score: {score}</>
      </div>
      <div
        style={{
          gridTemplateRows: `repeat(${size}, 1fr)`,
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
        className="snake-grid-container"
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <div
              className={`snake-cell ${cell === "head" ? "snake-head" : ""} ${
                cell === "body" ? "snake-body" : ""
              }  ${cell === "fruit" ? "snake-fruit-cell" : ""}`}
              key={`${rowIdx}-${colIdx}`}
            ></div>
          ))
        )}
      </div>

      {gameOver && <div className="snake-game-over">Game over</div>}
    </div>
  );
};
