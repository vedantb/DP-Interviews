let countSubsetSum = function (num, sum) {
  const n = num.length;

  // we change this from a boolean array to a integer 2D array initialized with all 0s
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  // populate the sum=0 column, as we can always have '0' sum without including any element
  // we can only have one way to achiece 0 sum which is by not including the item.
  for (let i = 0; i < n; i++) dp[i][0] = 1;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s ? 1 : 0;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      //dp[i][s] = count of subset sum by not including the item +
      // count of subset sum by including this item
      dp[i][s] = dp[i - 1][s];
      if (num[i] <= s) {
        dp[i][s] = dp[i][s] + dp[i - 1][s - num[i]];
      }
    }
  }

  // the bottom-right corner will have our answer.
  return dp[n - 1][sum];
};

console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 1, 2, 3], 4)}`);
console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 1, 1, 1], 1)}`);
console.log(`Total number of subsets equal to sum: ---> ${countSubsetSum([1, 2, 7, 1, 5], 9)}`);
