/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let globalMax = nums[0];
  let maxSoFar = nums[0];
  let minSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let tempMax = Math.max(currentNum, Math.max(maxSoFar * currentNum, minSoFar * currentNum));
    minSoFar = Math.min(currentNum, Math.min(maxSoFar * currentNum, minSoFar * currentNum));
    maxSoFar = tempMax;
    globalMax = Math.max(maxSoFar, globalMax);
  }
  return globalMax;
};
