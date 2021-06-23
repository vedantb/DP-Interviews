// https://leetcode.com/problems/n-queens/

/**
 * @param {number} N
 * @return {string[][]}
 */
var solveNQueens = function (N) {
  let res = [];
  backtrack(res, [], 0, N);
  let printedSolution = printSolution(res, N);
  return printedSolution;
};

let backtrack = function (completeSolution, partialSolution, row, N) {
  if (row === N) {
    completeSolution.push([...partialSolution]);
    return;
  }

  for (let col = 0; col < N; col++) {
    if (isSuitableCandidate(partialSolution, row, col)) {
      partialSolution[row] = col;
      backtrack(completeSolution, partialSolution, row + 1, N);
      partialSolution[row] = "#";
    }
  }
};

let isSuitableCandidate = function (partialSolution, row, col) {
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    // this will get the column of the previous row we filled
    let column = partialSolution[rowIndex];
    // return false if:
    // if the new column we are trying to insert is the same as an existing column from a prev row
    // now the diagonals are from top left to bottom right -> 0,0 1,1 2,2 and so on
    // another diagonal is from top right to bottom left -> 0,8 1,7, 2,6 and so on
    // to compare whether two queens are in the same diag abs(col1 - col2) === abs(row-row2)
    // irrespective of the diagonal, the differences of abs(row1-row2) wil always be same as abs(col1-col2)
    if (column === col || Math.abs(column - col) === Math.abs(rowIndex - row)) return false;
  }
  return true;
};

let printSolution = function (result, N) {
  let printedSolution = [];
  for (let arr of result) {
    let list = [];
    for (let i of arr) {
      let str = "";
      for (let k = 0; k < N; k++) {
        if (k === i) str += "Q";
        else str += ".";
      }
      list.push(str);
    }
    printedSolution.push(list);
  }
  return printedSolution;
};
