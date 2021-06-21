let uniquePaths = function (m, n) {
  if (m < 0 || n < 0) return 0;
  if (m === 1 || n === 1) return 1;

  let dp = Array(2)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < 2; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[1][j] = dp[0][j] + dp[1][j - 1];
    }
    dp[0] = dp[1];
  }
  return dp[1][n - 1];
};

console.log(uniquePaths(3, 7));
