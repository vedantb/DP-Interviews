let mergeStones = function (stones, K) {
  let n = stones.length;
  if ((n - 1) % (K - 1) > 0) return -1;

  let prefix = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stones[i];
  }

  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let len = K; len <= n; len++) {
    for (let beg = 0; beg <= n - len; beg++) {
      let end = beg + len - 1;
      dp[beg][end] = Infinity;
      for (let mid = beg; mid < end; mid += K - 1) {
        dp[beg][end] = Math.min(dp[beg][end], dp[beg][mid] + dp[mid + 1][end]);
      }
      if ((end - beg) % (K - 1) == 0) {
        dp[beg][end] += prefix[end + 1] - prefix[beg];
      }
    }
  }
  return dp[0][n - 1];
};

console.log(mergeStones([3, 5, 1, 2, 6], 3));
