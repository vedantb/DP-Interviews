let countChange = function (denominations, total) {
  const n = denominations.length;
  const dp = Array(denominations.length)
    .fill(0)
    .map(() => Array(total + 1).fill(0));

  // populate the total=0 columns, as we will always have an empty set for zero total
  for (let i = 0; i < n; i++) dp[i][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= total; t++) {
      if (i > 0) dp[i][t] = dp[i - 1][t];
      if (t >= denominations[i]) dp[i][t] += dp[i][t - denominations[i]];
    }
  }

  return dp[n - 1][total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
