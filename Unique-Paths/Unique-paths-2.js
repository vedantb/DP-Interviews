// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid || obstacleGrid.length == 0 || obstacleGrid[0].length == 0) {
    return 0;
  }
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i - 1 >= 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
);
