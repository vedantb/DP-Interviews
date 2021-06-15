let solveKnapsack = function (profits, weights, capacity) {
  const n = profits.length;
  if (capacity <= 0 || n === 0 || weights.length !== n) return 0;

  const dp = Array(2)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  // populate the capacity=0 column with 0 profit
  for (let i = 0; i < 2; i++) dp[i][0] = 0;

  // if we have only one weight, we will take it if it is not more than the capacity
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) dp[0][c] = profits[0];
  }

  //process all subarrays for all capacities
  for (let i = 1; i < n; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0;
      let profit2 = 0;

      // include the item if its not more than the capacity
      if (weights[i] <= c) profit1 = profits[i] + dp[(i - 1) % 2][c - weights[i]];

      //exclude the ittem
      profit2 = dp[(i - 1) % 2][c];

      //take max
      dp[i % 2][c] = Math.max(profit1, profit2);
    }
  }

  return n % 2 !== 0 ? dp[0][capacity] : dp[1][capacity];
};

var profits = [1, 6, 10];
var weights = [1, 2, 3];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
