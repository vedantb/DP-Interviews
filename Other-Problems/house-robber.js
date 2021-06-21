// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || nums.length === 0) return 0;

  let maxWithRobbingSoFar = nums[0];
  let maxWithNotRobbingSoFar = 0;

  for (let i = 1; i < nums.length; i++) {
    let temp = maxWithRobbingSoFar;
    maxWithRobbingSoFar = maxWithNotRobbingSoFar + nums[i];
    maxWithNotRobbingSoFar = Math.max(maxWithNotRobbingSoFar, temp);
  }
  return Math.max(maxWithRobbingSoFar, maxWithNotRobbingSoFar);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
