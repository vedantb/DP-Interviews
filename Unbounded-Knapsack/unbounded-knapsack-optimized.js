let solveUnboundedKnapsack = function (profits, weights, capacity) {
  let dp = Array(capacity + 1).fill(0);
  let n = profits.length;
  for (let i = 0; i <= capacity; i++) {
    for (let j = 0; j < n; j++) {
      if (weights[j] <= i) {
        dp[i] = Math.max(dp[i], profits[j] + dp[i - weights[j]]);
      }
    }
  }
  return dp[capacity];
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 8)}`);
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 6)}`);
