/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;

  let dp = Array(m)
    .fill(Infinity)
    .map(() => Array(n).fill(Infinity));
  let currentCell,
    rightHealth,
    downHealth,
    minHealth,
    nextHealth = 0;
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      currentCell = dungeon[row][col];

      if (col === n - 1) {
        rightHealth = Infinity;
      } else {
        rightHealth = Math.max(1, dp[row][col + 1] - dungeon[row][col]);
      }

      if (row === m - 1) {
        downHealth = Infinity;
      } else {
        downHealth = Math.max(1, dp[row + 1][col] - dungeon[row][col]);
      }

      nextHealth = Math.min(rightHealth, downHealth);

      if (nextHealth !== Infinity) {
        minHealth = nextHealth;
      } else {
        minHealth = currentCell >= 0 ? 1 : 1 - currentCell;
      }
      dp[row][col] = minHealth;
    }
  }
  return dp[0][0];
};

let getMinHealth = function (dp, currentCell, nextRow, nextCol, rows, cols) {
  if (nextRow >= rows || nextCol >= cols) return Infinity;
  let nextCell = dp[nextRow][nextCol];
  return Math.max(1, nextCell - currentCell);
};
