/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;

  let dp = Array(n).fill(Infinity);
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
        rightHealth = Math.max(1, dp[col + 1] - dungeon[row][col]);
      }

      if (row === m - 1) {
        downHealth = Infinity;
      } else {
        downHealth = Math.max(1, dp[col] - dungeon[row][col]);
      }

      nextHealth = Math.min(rightHealth, downHealth);

      if (nextHealth !== Infinity) {
        minHealth = nextHealth;
      } else {
        minHealth = currentCell >= 0 ? 1 : 1 - currentCell;
      }
      dp[col] = minHealth;
    }
  }
  return dp[0];
};
