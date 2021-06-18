const findLISLength = function (nums) {
  function findLISLengthRecursive(nums, currentIndex, previousIndex) {
    if (currentIndex === nums.length) return 0;

    // include nums[currentIndex] if it's larger than previous number
    let c1 = 0;
    if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
      c1 = 1 + findLISLengthRecursive(nums, currentIndex + 1, currentIndex);
    }

    // excluding the current number
    const c2 = findLISLengthRecursive(nums, currentIndex + 1, previousIndex);

    return Math.max(c1, c2);
  }
  return findLISLengthRecursive(nums, 0, -1);
};

console.log(findLISLength([4, 2, 3, 6, 10, 1, 12]));
console.log(findLISLength([-4, 10, 3, 7, 15]));
