let countChange = function (denominations, total) {
  const result = countChangeRecursive(denominations, total, 0);
  return result === Number.MAX_VALUE ? -1 : result;
};

let countChangeRecursive = function (denominations, total, currentIndex) {
  // base Checks
  if (total === 0) return 0;

  if (denominations.length === 0 || currentIndex >= denominations.length) return Number.MAX_VALUE;

  // recursive call after selecting the coin at the currentIndex
  // if the coin at currentIndex exceeds the total, we shouldn't process this
  let count1 = Number.MAX_VALUE;
  if (denominations[currentIndex] <= total) {
    const res = countChangeRecursive(denominations, total - denominations[currentIndex], currentIndex);
    if (res !== Number.MAX_VALUE) count1 = res + 1;
  }

  // recursive call after excluding the coin at the currentIndex
  const count2 = countChangeRecursive(denominations, total, currentIndex + 1);

  return Math.min(count1, count2);
};

console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([3, 5], 7)}`);
