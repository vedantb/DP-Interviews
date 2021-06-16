let countRibbonPieces = function (ribbonLengths, total) {
  const n = ribbonLengths.length;
  const dp = Array(total + 1).fill(Number.MIN_VALUE);

  // populate the total=0 columns, as we don't need any ribbon to make zero total
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= total; j++) {
      if (j >= ribbonLengths[i] && dp[j - ribbonLengths[i]] !== Number.MIN_VALUE) {
        dp[j] = Math.max(dp[j], dp[j - ribbonLengths[i]] + 1);
      }
    }
  }

  return dp[total] === Number.MIN_VALUE ? -1 : dp[total];
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);
