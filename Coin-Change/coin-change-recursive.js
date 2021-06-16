let coinChange = function (denominations, total) {
  return coinChangeRecursive(denominations, total, 0);
};

let coinChangeRecursive = function (denominations, total, currentIndex) {
  // base Checks
  if (total === 0) return 1;

  if (denominations.length === 0 || currentIndex >= denominations.length) return 0;

  // recursive call after selecting the coin at the currentIndex
  // if the coin at currentIndex exceeds the total, we shouldn't process this
  let sum1 = 0;
  if (denominations[currentIndex] <= total) {
    sum1 = coinChangeRecursive(denominations, total - denominations[currentIndex], currentIndex);
  }

  // recursive call after excluding the coin at the currentIndex
  const sum2 = coinChangeRecursive(denominations, total, currentIndex + 1);

  return sum1 + sum2;
};

console.log(`Number of ways to make change: ---> ${coinChange([1, 2, 3], 5)}`);
