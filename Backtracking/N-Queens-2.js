// https://leetcode.com/problems/n-queens/

/**
 * @param {number} N
 * @return {string[][]}
 */
var solveNQueens2 = function (N) {
  let count = 0;
  let backtrack = function (partialSolution, row, N) {
    if (row === N) {
      count++;
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isSuitableCandidate(partialSolution, row, col)) {
        partialSolution[row] = col;
        backtrack(partialSolution, row + 1, N);
        partialSolution[row] = "#";
      }
    }
  };
  backtrack([], 0, N);
  return count;
};

let isSuitableCandidate = function (partialSolution, row, col) {
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    let column = partialSolution[rowIndex];
    if (column === col || Math.abs(column - col) === Math.abs(rowIndex - row)) return false;
  }
  return true;
};

console.log(solveNQueens2(9));
