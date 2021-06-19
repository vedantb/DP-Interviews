let maxProductSubarray = function (nums) {
  if (!nums || nums.length === 0) return -1;
  let localMaxPos = -Infinity;
  let localMaxNeg = Infinity;
  let globalMax = nums[0];
  if (nums[0] >= 0) localMaxPos = nums[0];
  else localMaxNeg = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (localMaxPos >= 0) {
        localMaxPos = Math.max(nums[i], localMaxPos * nums[i]);
      } else {
        localMaxPos = nums[i];
      }
      if (localMaxNeg <= 0) {
        localMaxNeg = localMaxNeg * nums[i];
      } else {
        localMaxNeg = Infinity;
      }
    } else {
      let negNum = 0;
      if (localMaxPos > 0) {
        negNum = nums[i] * localMaxPos;
      } else {
        negNum = nums[i];
      }
      if (localMaxNeg < 0) {
        localMaxPos = nums[i] * localMaxNeg;
      } else {
        localMaxPos = -Infinity;
      }
      localMaxNeg = negNum;
    }
    if (localMaxPos >= 0) {
      globalMax = Math.max(globalMax, localMaxPos);
    }
    if (localMaxNeg <= 0) {
      globalMax = Math.max(globalMax, localMaxNeg);
    }
  }
  return globalMax;
};

console.log(maxProductSubarray([-2, 0, -1]));

console.log(maxProductSubarray([2, 3, -2, 4]));
