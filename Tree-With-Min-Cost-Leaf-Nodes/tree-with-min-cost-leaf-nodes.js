let mctFromLeafValues = function (arr) {
  let n = arr.length;
  if (n === 2) return arr[0] * arr[1];

  let max = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let beg = 0; beg <= n - len; beg++) {
      let end = beg + len - 1;
      if (beg === end) max[beg][end] = arr[beg];
      else max[beg][end] = Math.max(max[beg][end - 1], arr[end]);
    }
  }

  // every cut i indicates the end node of left subtree
  // we need to know two things:
  // 1. max of left subtree [beg, i] and max of right subtree [i + 1, end]
  // 2. minimum sum of the non-leaf nodes for each of left and right subtree

  for (let len = 2; len <= n; len++) {
    for (let beg = 0; beg <= n - len; beg++) {
      let end = beg + len - 1;
      dp[beg][end] = Infinity;
      for (let cut = beg; cur < end; cut++) {
        dp[beg][end] = Math.min(dp[beg][end], dp[beg][cut] + max[beg][cut] * max[cut + 1][end] + dp[cut + 1][end]);
      }
    }
  }

  return dp[0][n - 1];
};
