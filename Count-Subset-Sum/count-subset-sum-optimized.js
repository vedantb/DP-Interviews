let countSubsetSum = function (num, sum) {
  const dp = Array(sum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < num.length; i++) {
    for (let j = sum; j >= num[i]; j--) {
      dp[j] = dp[j] + dp[j - num[i]];
    }
  }
  return dp[sum];
};

console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 1, 2, 3], 4)}`);
console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 1, 1, 1], 1)}`);
console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 2, 7, 1, 5], 9)}`);
