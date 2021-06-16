let solveUnboundedKnapsack = function (profits, weights, capacity) {
  const dp = [];
  return solveUnBoundedKnapsackRecursiveHelper(dp, profits, weights, capacity, 0);
};

let solveUnBoundedKnapsackRecursiveHelper = function (dp, profits, weights, capacity, currIndex) {
  // base checks
  if (capacity <= 0 || profits.length === 0 || weights.length !== profits.length || currIndex >= profits.length) {
    return 0;
  }

  dp[currIndex] = dp[currIndex] || []; // <--- NEW LINE

  if (typeof dp[currIndex][capacity] !== "undefined") return dp[currIndex][capacity]; // <---- NEW LINE

  // recursively call after choosing the item at currentIndex. Note that we do not
  // increment the index in the recursive call
  let profit1 = 0;
  if (weights[currIndex] <= capacity) {
    profit1 =
      profits[currIndex] +
      solveUnBoundedKnapsackRecursiveHelper(dp, profits, weights, capacity - weights[currIndex], currIndex);
  }

  // recursively call after exclusing the item at currIndex
  const profit2 = solveUnBoundedKnapsackRecursiveHelper(dp, profits, weights, capacity, currIndex + 1);

  dp[currIndex][capacity] = Math.max(profit1, profit2); // <--- NEW LINE
  return dp[currIndex][capacity]; // <--- NEW LINE
};

let profits = [15, 50, 60, 90];
let weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 8)}`);
