let countChange = function (denominations, total) {
  const dp = [];
  const result = countChangeRecursive(dp, denominations, total, 0);
  return result === Number.MAX_VALUE ? -1 : result;
};

let countChangeRecursive = function (dp, denominations, total, currentIndex) {
  // base Checks
  if (total === 0) return 0;

  if (denominations.length === 0 || currentIndex >= denominations.length) return Number.MAX_VALUE;

  dp[currentIndex] = dp[currentIndex] || [];

  if (typeof dp[currentIndex][total] !== "undefined") return dp[currentIndex][total];

  // recursive call after selecting the coin at the currentIndex
  // if the coin at currentIndex exceeds the total, we shouldn't process this
  let count1 = Number.MAX_VALUE;
  if (denominations[currentIndex] <= total) {
    const res = countChangeRecursive(dp, denominations, total - denominations[currentIndex], currentIndex);
    if (res !== Number.MAX_VALUE) count1 = res + 1;
  }

  // recursive call after excluding the coin at the currentIndex
  const count2 = countChangeRecursive(dp, denominations, total, currentIndex + 1);

  dp[currentIndex][total] = Math.min(count1, count2);
  return dp[currentIndex][total];
};

console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Minimum no. of coins to make change: ---> ${countChange([3, 5], 7)}`);
