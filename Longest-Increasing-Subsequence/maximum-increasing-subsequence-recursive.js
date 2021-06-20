const findMSIS = function (nums) {
  function findMSISRecursive(nums, currentIndex, previousIndex, sum) {
    if (currentIndex === nums.length) return sum;

    // include nums[currentIndex] if it is larger than the last included number
    let s1 = sum;
    if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
      s1 = findMSISRecursive(nums, currentIndex + 1, currentIndex, sum + nums[currentIndex]);

    // excluding the number at currentIndex
    let s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum);

    return Math.max(s1, s2);
  }
  return findMSISRecursive(nums, 0, -1, 0);
};

console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([4, 1, 2, 6, 10, 1, 12])}`);
console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([-4, 10, 3, 7, 15])}`);
