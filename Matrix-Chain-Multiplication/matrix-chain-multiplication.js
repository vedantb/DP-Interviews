let computeOptimalMatrixMultiplication = function (dimensions) {
  let n = dimensions.length - 1;
  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let beg = 0; beg < n - len + 1; beg++) {
      let end = beg + len - 1;
      dp[beg][end] = Infinity;
      for (let cut = beg; cut <= end - 1; cut++) {
        let cost = dp[beg][cut] + dp[cut + 1][end] + dimensions[beg] * dimensions[cut + 1] * dimensions[end + 1];
        if (cost < dp[beg][end]) {
          dp[beg][end] = cost;
        }
      }
    }
  }
  return dp[0][n - 1];
};

console.log(computeOptimalMatrixMultiplication([40, 20, 30, 10, 30])); // 26000
console.log(computeOptimalMatrixMultiplication([10, 20, 30, 40, 30])); // 30000
