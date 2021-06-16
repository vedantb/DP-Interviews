let countRibbonPieces = function (ribbonLengths, total) {
  const n = ribbonLengths.length;
  const dp = Array(n)
    .fill(Number.MIN_VALUE)
    .map(() => Array(total + 1).fill(Number.MIN_VALUE));

  // populate the total=0 columns, as we don't need any ribbon to make zero total
  for (let i = 0; i < n; i++) dp[i][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= total; j++) {
      if (i > 0) {
        dp[i][j] = dp[i - 1][j];
      }
      if (j >= ribbonLengths[i] && dp[i][j - ribbonLengths[i]] !== Number.MIN_VALUE) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - ribbonLengths[i]] + 1);
      }
    }
  }

  return dp[n - 1][total] === Number.MIN_VALUE ? -1 : dp[n - 1][total];
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);
