let findTargetSubsets = function (num, s) {
  let totalSum = 0;
  for (let i = 0; i < num.length; i++) {
    totalSum += num[i];
  }

  // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) / 2'
  if (totalSum < s || (s + totalSum) % 2 == 1) return 0;

  return countSubsetSum(num, Math.floor((s + totalSum) / 2));
};

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

console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);
