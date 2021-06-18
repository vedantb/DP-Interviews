let getLongestBitonicSubsequence = function (nums) {
  if (!nums || nums.length === 0) return 0;

  let len = nums.length;
  // longestIncreasingSubsequence[i] = length of longest increasing subsequence that ENDS at nums[i]
  //  and includes nums[i] in nums[0..i]
  let longestIncreasingSubsequence = Array(len).fill(1);
  // longestIncreasingSubsequence[i] = length of longest decreasing subsequence that BEGINS at nums[i]
  // and includes nums[i] in nums[i...(len - 1)]
  let longestDecreasingSubsequence = Array(len).fill(1);

  /* Compute LIS (Longest Increasing Subsequence) values from LEFT TO RIGHT */
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longestIncreasingSubsequence[i] = Math.max(
          longestIncreasingSubsequence[i],
          longestIncreasingSubsequence[j] + 1
        );
      }
    }
  }

  /* Compute LDS (Longest Decreasing Subsequence) values from RIGHT TO LEFT */
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j <= len - 1; j++) {
      if (nums[j] < nums[i]) {
        longestDecreasingSubsequence[i] = Math.max(
          longestDecreasingSubsequence[i],
          longestDecreasingSubsequence[j] + 1
        );
      }
    }
  }

  let max = 1;

  /* Return the maximum value of longestIncreasingSubsequence[i] + longestDecreasingSubsequence[i] - 1*/
  for (let i = 0; i < len; i++) {
    // both longestIncreasingSubsequence[i] and longestDecreasingSubsequence[i] includes nums[i]
    // but since we only want to include it once, we subtract 1
    max = Math.max(max, longestIncreasingSubsequence[i] + longestDecreasingSubsequence[i] - 1);
  }
  return max;
};

console.log(getLongestBitonicSubsequence([0, 1, 2, 3, 2, 1])); // 6
console.log(getLongestBitonicSubsequence([0, 8, 1, 2, 8, 3, 2, 8, 1])); // 7
console.log(getLongestBitonicSubsequence([0, 1, 2])); // 3
console.log(getLongestBitonicSubsequence([8, 7, 6, 5])); // 4
console.log(getLongestBitonicSubsequence([9, 8, 7, 1, 2, 6, 5, 1])); // 6
