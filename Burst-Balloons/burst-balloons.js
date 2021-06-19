let burstBalloons = function (nums) {
  if (!nums || nums.length === 0) return 0;

  let totalBalloons = nums.length;
  let dp = Array(totalBalloons)
    .fill(0)
    .map(() => Array(totalBalloons).fill(0));

  for (let len = 1; len <= totalBalloons; len++) {
    for (let beg = 0; beg <= totalBalloons - len; beg++) {
      let end = beg + len - 1;
      dp[beg][end] = -Infinity;
      for (let lastBalloonBurst = beg; lastBalloonBurst <= end; lastBalloonBurst++) {
        let left = beg > 0 ? nums[beg - 1] : 1;
        let right = end < totalBalloons - 1 ? nums[end + 1] : 1;
        let leftSum = lastBalloonBurst !== beg ? dp[beg][lastBalloonBurst - 1] : 0;
        let rightSum = lastBalloonBurst !== end ? dp[lastBalloonBurst + 1][end] : 0;
        dp[beg][end] = Math.max(dp[beg][end], leftSum + rightSum + left * right * nums[lastBalloonBurst]);
      }
    }
  }
  return dp[0][totalBalloons - 1];
};

console.log(burstBalloons([3, 1, 5, 8]));
