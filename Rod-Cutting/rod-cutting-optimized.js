let solveRodCutting = function (lengths, prices, rodLength) {
  let dp = Array(rodLength + 1).fill(0);
  let n = prices.length;
  for (let i = 0; i <= rodLength; i++) {
    for (let j = 0; j < n; j++) {
      if (lengths[j] <= i) {
        dp[i] = Math.max(dp[i], prices[j] + dp[i - lengths[j]]);
      }
    }
  }
  return dp[rodLength];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);
