export const useTicTacToeValidation = (size) => {
  const colCheck = (grid) => {
    for (let i = 0; i < size; i++) {
      const initialValue = grid[0][i];
      let colWinner = true;

      for (let j = 1; j < size; j++) {
        if (grid[j][i] !== initialValue || grid[j][i] === "") {
          colWinner = false;
          break;
        }
      }

      if (colWinner) {
        return initialValue;
      }
    }

    return false;
  };

  const rowCheck = (grid) => {
    for (let i = 0; i < size; i++) {
      const initialValue = grid[i][0];
      let rowWinner = true;

      for (let j = 1; j < size; j++) {
        if (grid[i][j] !== initialValue || grid[i][j] === "") {
          rowWinner = false;
          break;
        }
      }

      if (rowWinner) {
        return initialValue;
      }
    }

    return false;
  };

  const diagonalCheckOne = (grid) => {
    const initialValue = grid[0][0];
    let diagWinner = true;

    for (let i = 1; i < size; i++) {
      if (grid[i][i] !== initialValue || grid[i][i] === "") {
        diagWinner = false;
        break;
      }
    }

    if (diagWinner) {
      return initialValue;
    }
  };

  const diagonalCheckTwo = (grid) => {
    const initialValue = grid[0][size - 1];
    let diagWinner = true;

    for (let i = 1; i < size; i++) {
      if (
        grid[i][size - (i + 1)] !== initialValue ||
        grid[i][size - (i + 1)] === ""
      ) {
        diagWinner = false;
        break;
      }
    }

    if (diagWinner) {
      return initialValue;
    }
  };

  const perfromValidation = (grid) => {
    return (
      colCheck(grid) ||
      rowCheck(grid) ||
      diagonalCheckOne(grid) ||
      diagonalCheckTwo(grid)
    );
  };

  return perfromValidation;
};
