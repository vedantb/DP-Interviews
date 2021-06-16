let countChange = function (denominations, total) {
  const n = denominations.length;
  const dp = Array(denominations.length)
    .fill(Number.MAX_VALUE)
    .map(() => Array(total + 1).fill(Number.MAX_VALUE));

  for (let i = 0; i < n; i++) dp[i][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= total; j++) {
      if (i > 0) {
        dp[i][j] = dp[i - 1][j];
      }
      if (j >= denominations[i]) {
        dp[i][j] = Math.min(dp[i][j], 1 + dp[i][j - denominations[i]]);
      }
    }
  }

  return dp[n - 1][total] === Number.MAX_VALUE ? -1 : dp[n - 1][total];
};

console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([3, 5], 7)}`);
