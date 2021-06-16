let countChange = function (denominations, total) {
  const n = denominations.length;
  const dp = Array(total + 1).fill(Number.MAX_VALUE);

  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= total; j++) {
      if (j >= denominations[i]) {
        dp[j] = Math.min(dp[j], 1 + dp[j - denominations[i]]);
      }
    }
  }

  return dp[total] === Number.MAX_VALUE ? -1 : dp[total];
};

console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([3, 5], 7)}`);
