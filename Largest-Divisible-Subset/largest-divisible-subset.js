function largestDivisibleSubset(nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);

  // once we sort nums[] array in ascending order this problems reduces to
  // finding longest increasing subsequence maintaining the condition given in the problem
  let parent = Array(len);
  for (let i = 0; i < len; i++) {
    parent[i] = i;
  }
  let dp = Array(len).fill(1);
  let maxLength = 1;
  let listEndIndex = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
    if (maxLength < dp[i]) {
      maxLength = dp[i];
      listEndIndex = i;
    }
  }
  while (parent[listEndIndex] !== listEndIndex) {
    res.push(nums[listEndIndex]);
    listEndIndex = parent[listEndIndex];
  }
  res.push(nums[listEndIndex]);
  return res.reverse();
}

console.log(largestDivisibleSubset([1, 2, 3]));
console.log(largestDivisibleSubset([1, 2, 4, 8]));
