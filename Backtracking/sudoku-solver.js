/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let finished = false;
  let backtrack = function (board, row, col) {
    if (row > 8) {
      finished = true;
      return;
    }
    let nextRow = col === 8 ? row + 1 : row;
    let nextCol = col === 8 ? 0 : col + 1;
    if (board[row][col] === ".") {
      let suitableCandidates = constructCandidates(board, row, col);
      for (let d = 1; d < 10; d++) {
        if (suitableCandidates[d - 1]) {
          board[row][col] = `${d}`;
          backtrack(board, nextRow, nextCol);
          if (finished) return true;
          board[row][col] = ".";
        }
      }
    } else {
      backtrack(board, nextRow, nextCol);
    }
  };
  backtrack(board, 0, 0);
};

let constructCandidates = function (board, row, col) {
  let candidates = Array(9).fill(true);
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== ".") {
      candidates[board[i][col] - "0" - 1] = false;
    }
  }

  for (let j = 0; j < 9; j++) {
    if (board[row][j] !== ".") {
      candidates[board[row][j] - "0" - 1] = false;
    }
  }

  // box-check
  let topLeftRow = Math.floor(row / 3) * 3;
  let topLeftCol = Math.floor(col / 3) * 3;
  for (let i = topLeftRow; i < topLeftRow + 3; i++) {
    for (let j = topLeftCol; j < topLeftCol + 3; j++) {
      if (board[i][j] !== ".") {
        candidates[board[i][j] - "0" - 1] = false;
      }
    }
  }
  return candidates;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);

console.log(board);
