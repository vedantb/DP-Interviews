let solveUnboundedKnapsack = function (profits, weights, capacity) {
  return solveUnBoundedKnapsackRecursiveHelper(profits, weights, capacity, 0);
};

let solveUnBoundedKnapsackRecursiveHelper = function (profits, weights, capacity, currIndex) {
  // base checks
  if (capacity <= 0 || profits.length === 0 || weights.length !== profits.length || currIndex >= profits.length) {
    return 0;
  }

  // recursively call after choosing the item at currentIndex. Note that we do not
  // increment the index in the recursive call
  let profit1 = 0;
  if (weights[currIndex] <= capacity) {
    profit1 =
      profits[currIndex] +
      solveUnBoundedKnapsackRecursiveHelper(profits, weights, capacity - weights[currIndex], currIndex);
  }

  // recursively call after exclusing the item at currIndex
  const profit2 = solveUnBoundedKnapsackRecursiveHelper(profits, weights, capacity, currIndex + 1);

  return Math.max(profit1, profit2);
};

let profits = [15, 50, 60, 90];
let weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveUnboundedKnapsack(profits, weights, 8)}`);
