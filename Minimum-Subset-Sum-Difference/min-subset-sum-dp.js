let minSubsetSum = function (nums) {
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i];

  const requiredSum = Math.floor(sum / 2);
  const dp = Array(requiredSum + 1).fill(false);

  // populate the sum=0 columns, as we can always form '0' sum with an empty set
  dp[0] = true;

  // with only one number, we can form a subset only when the required sum is equal to that number
  for (let s = 1; s <= requiredSum; s++) {
    dp[s] = nums[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = requiredSum; s >= nums[i]; s--) {
      dp[s] = dp[s] || dp[s - nums[i]];
    }
  }

  let sum1 = 0;
  for (let i = requiredSum; i >= 0; i--) {
    if (dp[i]) {
      sum1 = i;
      break;
    }
  }
  const sum2 = sum - sum1;
  return Math.abs(sum1 - sum2);
};

console.log(`Minimum subset difference is: ---> ${minSubsetSum([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${minSubsetSum([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${minSubsetSum([1, 3, 100, 4])}`);
