let countChange = function (denominations, total) {
  const n = denominations.length;
  const dp = Array(total + 1).fill(0);

  // populate the total=0 column, as we will always have an empty set for zero total
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= total; t++) {
      if (t >= denominations[i]) dp[t] += dp[t - denominations[i]];
    }
  }

  return dp[total];
};

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);
