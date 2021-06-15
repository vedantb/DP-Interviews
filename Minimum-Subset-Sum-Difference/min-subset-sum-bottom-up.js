let minSubsetSum = function (nums) {
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i];

  const requiredSum = Math.floor(sum / 2);
  const dp = Array(n)
    .fill(false)
    .map(() => Array(requiredSum + 1).fill(false));

  // populate the sum=0 columns, as we can always form '0' sum with an empty set
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, we can form a subset only when the required sum is equal to that number
  for (let s = 1; s <= requiredSum; s++) {
    dp[0][s] = nums[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= requiredSum; s++) {
      // if we can get the sum 's' without the number at index 'i'
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= nums[i]) {
        // else include the number and see if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }
  }

  let sum1 = 0;
  for (let i = requiredSum; i >= 0; i--) {
    if (dp[n - 1][i]) {
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
