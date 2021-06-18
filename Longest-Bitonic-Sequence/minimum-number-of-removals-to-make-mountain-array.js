// https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/

/**
 * Same as bitonic sequence with one condition that a strictly increasing or
 * decreasing subsequence is not valid
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  if (!nums || nums.length < 3) return 0;
  let len = nums.length;
  let longestIncreasingSubsequence = Array(len).fill(1);
  let longestDecreasingSubsequence = Array(len).fill(1);
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
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (longestDecreasingSubsequence[i] > 1 && longestIncreasingSubsequence[i] > 1) {
      max = Math.max(max, longestIncreasingSubsequence[i] + longestDecreasingSubsequence[i] - 1);
    }
  }
  return len - max;
};
