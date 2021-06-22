/** https://leetcode.com/problems/word-search/
 *
 * Another case of classic backtracking problem. This solution uses the visited set.
 * We can avoid the visited set and just mark the board[row][col] as # to avoid looping over it again.
 */
let wordSearch = function (board, word) {
  if (!board || !word || board.length === 0 || word.length === 0) return false;

  let firstCharacter = word[0];
  let visited = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === firstCharacter) {
        if (backtrack(0, word, i, j, board, visited)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
};

let backtrack = function (characterIndex, word, row, col, board, visited) {
  if (characterIndex === word.length - 1 && word[characterIndex] === board[row][col]) return true;

  if (board[row][col] !== word[characterIndex]) return false;

  let candidates = computeAdjacentCells(row, col, board, visited);

  for (let candidate of candidates) {
    visited.add(`${row}-${col}`);
    if (backtrack(characterIndex + 1, word, candidate[0], candidate[1], board, visited)) return true;
    visited.delete(`${row}-${col}`);
  }
  return false;
};

let computeAdjacentCells = function (row, col, board, visited) {
  let directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];
  let candidates = [];
  for (let direction of directions) {
    let nextRow = row + direction[0];
    let nextCol = col + direction[1];
    if (
      nextRow < 0 ||
      nextRow === board.length ||
      nextCol < 0 ||
      nextCol === board[0].length ||
      visited.has(`${nextRow}-${nextCol}`)
    ) {
      continue;
    }
    candidates.push([nextRow, nextCol]);
  }
  return candidates;
};

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCCED"
  )
);
