let coinChange = function (denominations, total) {
  const dp = [];
  return coinChangeRecursive(dp, denominations, total, 0);
};

let coinChangeRecursive = function (dp, denominations, total, currentIndex) {
  // base Checks
  if (total === 0) return 1;

  if (denominations.length === 0 || currentIndex >= denominations.length) return 0;

  dp[currentIndex] = dp[currentIndex] || [];

  // if we have already processed a similar sub-problem, return the result from memory
  if (typeof dp[currentIndex][total] !== "undefined") return dp[currentIndex][total];

  // recursive call after selecting the coin at the currentIndex
  // if the coin at currentIndex exceeds the total, we shouldn't process this
  let sum1 = 0;
  if (denominations[currentIndex] <= total) {
    sum1 = coinChangeRecursive(dp, denominations, total - denominations[currentIndex], currentIndex);
  }

  // recursive call after excluding the coin at the currentIndex
  const sum2 = coinChangeRecursive(dp, denominations, total, currentIndex + 1);

  dp[currentIndex][total] = sum1 + sum2;
  return dp[currentIndex][total];
};

console.log(`Number of ways to make change: ---> ${coinChange([1, 2, 3], 5)}`);
