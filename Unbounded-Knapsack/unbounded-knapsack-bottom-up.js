let solveUnboundedKnapsack = function (profits, weights, capacity) {
  // base checks
  if (capacity <= 0 || profits.length == 0 || weights.length != profits.length) return 0;

  const n = profits.length;
  const dp = Array(profits.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  // the capacity=0 columns are already populated with 0 during the initalization

  // process all sub-arrays for all capacities
  for (let i = 0; i < n; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0;
      let profit2 = 0;
      if (weights[i] <= c) profit1 = profits[i] + dp[i][c - weights[i]];
      if (i > 0) profit2 = dp[i - 1][c];
      dp[i][c] = Math.max(profit1, profit2);
    }
  }
  printItems(profits, weights, capacity, dp);
  return dp[n - 1][capacity];
};

let printItems = function (profits, weights, capacity, dp) {
  let selectedWeights = "";
  let totalProfit = dp[weights.length - 1][capacity];
  let remainingCapacity = capacity;
  let i = weights.length - 1;
  while (i > 0) {
    if (totalProfit !== dp[i - 1][remainingCapacity]) {
      selectedWeights = `${weights[i]} ${selectedWeights}`;
      remainingCapacity -= weights[i];
      totalProfit -= profits[i];
    } else {
      i--;
    }
  }
  if (totalProfit != 0) selectedWeights = `${weights[0]} ${selectedWeights}`;
  console.log(`Selected weights: ${selectedWeights}`);
};

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 8)}`);
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 6)}`);
