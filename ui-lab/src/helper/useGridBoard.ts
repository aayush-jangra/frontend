import { useState } from "react";
import {
  Direction,
  GridBoxInfo,
  GridBoxType,
} from "../schema/gridBoard.schema";
import { BoxColors } from "../schema/colors.schema";

export const useGridBoard = () => {
  const defaultMap = [
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ];

  const [boxes, setBoxes] = useState<GridBoxInfo[]>([]);
  const [board, setBoard] = useState(defaultMap);

  function getDivId() {
    if (boxes.length === 0) return "box-1";

    const lastId = boxes[boxes.length - 1].id.split("-")[1];

    return `box-${parseInt(lastId) + 1}`;
  }

  function getTemplateArea() {
    let val = "";
    board.forEach((row) => {
      const str = row.join(" ");
      val = `${val}"${str}" `;
    });

    return val;
  }

  function addBox(row: number, col: number) {
    const newDivId = getDivId();
    const { bgColor, shadowColor } =
      BoxColors[Math.floor(Math.random() * BoxColors.length)];

    setBoxes((prev) => {
      const newV = [...prev];
      newV.push({
        id: newDivId,
        name: "",
        bgColor,
        shadowColor,
        start: [row, col],
        end: [row, col],
        type: GridBoxType.TEXTAREA,
      });
      return newV;
    });

    setBoard((prev) => {
      const newV = prev.map((row) => [...row]);
      newV[row][col] = newDivId;

      return newV;
    });
  }

  function removeBox(id: string) {
    setBoxes((prev) => {
      const newV = [...prev];

      return newV.filter((box) => box.id !== id);
    });

    setBoard((prev) => {
      const newV = prev.map((row) => [...row]);
      for (let i = 0; i < newV.length; i++) {
        for (let j = 0; j < newV[i].length; j++) {
          if (newV[i][j] === id) newV[i][j] = ".";
        }
      }

      return newV;
    });
  }

  function updateBoxInfo(id: string, newValues: Partial<GridBoxInfo>) {
    setBoxes((prev) => {
      const newV = [...prev];

      return newV.map((item) => {
        if (item.id === id) {
          return { ...item, ...newValues };
        }

        return item;
      });
    });
  }

  function extendBoard(direction: Direction) {
    if (direction === "right") {
      setBoard((prev) => {
        const newV = prev.map((row) => [...row]);
        newV.forEach((row) => row.push("."));

        return newV;
      });
    } else if (direction === "down") {
      setBoard((prev) => {
        const newV = prev.map((row) => [...row]);
        newV.push(Array(prev[0].length).fill("."));

        return newV;
      });
    }
  }

  function extendBox(
    id: string,
    direction: Direction,
    start: [number, number],
    end: [number, number]
  ) {
    const delta = { row: 0, col: 0 };

    (() => {
      switch (direction) {
        case "down":
          delta.row = 1;
          break;
        case "up":
          delta.row = -1;
          break;
        case "left":
          delta.col = -1;
          break;
        case "right":
          delta.col = 1;
          break;
      }
    })();

    // Update Boxes
    setBoxes((prev) => {
      const newV = [...prev];

      const ind = newV.findIndex((box) => {
        return box.id === id;
      });

      if (ind === -1) return prev;

      const box = newV[ind];

      if (direction === "down" || direction === "right") {
        newV[ind] = { ...box, end: [end[0] + delta.row, end[1] + delta.col] };
      } else {
        newV[ind] = {
          ...box,
          start: [start[0] + delta.row, start[1] + delta.col],
        };
      }

      return newV;
    });

    // Update Board
    setBoard((prev) => {
      const newV = prev.map((row) => [...row]);

      if (direction === "right") {
        for (let i = start[0]; i <= end[0]; i++) {
          newV[i][end[1] + delta.col] = id;
        }
      } else if (direction === "left") {
        for (let i = start[0]; i <= end[0]; i++) {
          newV[i][start[1] + delta.col] = id;
        }
      } else if (direction === "up") {
        for (let i = start[1]; i <= end[1]; i++) {
          newV[start[0] + delta.row][i] = id;
        }
      } else {
        for (let i = start[1]; i <= end[1]; i++) {
          newV[end[0] + delta.row][i] = id;
        }
      }

      return newV;
    });
  }

  function canExtendBox(
    direction: Direction,
    start: [number, number],
    end: [number, number]
  ) {
    const delta = { row: 0, col: 0 };

    (() => {
      switch (direction) {
        case "down":
          delta.row = 1;
          break;
        case "up":
          delta.row = -1;
          break;
        case "left":
          delta.col = -1;
          break;
        case "right":
          delta.col = 1;
          break;
      }
    })();

    const maxRows = board.length;
    const maxCols = board[0].length;

    // Check Board
    if (direction === "right") {
      if (end[1] >= maxCols - 1) return false;
      for (let i = start[0]; i <= end[0]; i++) {
        if (board[i][end[1] + delta.col] !== ".") return false;
      }
    } else if (direction === "left") {
      if (start[1] <= 0) return false;
      for (let i = start[0]; i <= end[0]; i++) {
        if (board[i][start[1] + delta.col] !== ".") return false;
      }
    } else if (direction === "up") {
      if (start[0] <= 0) return false;
      for (let i = start[1]; i <= end[1]; i++) {
        if (board[start[0] + delta.row][i] !== ".") return false;
      }
    } else {
      if (end[0] >= maxRows - 1) return false;
      for (let i = start[1]; i <= end[1]; i++) {
        if (board[end[0] + delta.row][i] !== ".") return false;
      }
    }

    return true;
  }

  return {
    boxes,
    board,
    getTemplateArea,
    addBox,
    removeBox,
    updateBoxInfo,
    extendBox,
    canExtendBox,
    extendBoard,
  };
};
