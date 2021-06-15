let canPartition = function (num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  // if 'sum' is a an odd number, we can't have two subsets with equal sum
  if (sum % 2 !== 0) return false;

  sum /= 2;

  const dp = Array(sum + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < num.length; i++) {
    for (let j = sum; j >= num[i]; j--) {
      dp[j] = dp[j] || dp[j - num[i]];
    }
  }
  return dp[sum];
};

console.log(canPartition([1, 2, 3, 4]));
