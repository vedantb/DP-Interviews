let longestIncreasingSubsequence = function (nums) {
  let tailTable = Array(nums.length).fill(0);
  tailTable[0] = nums[0];
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < tailTable[0]) tailTable[0] = nums[i];
    else if (nums[i] > tailTable[len - 1]) {
      tailTable[len++] = nums[i];
    } else {
      tailTable[binSearch(tailTable, 0, len - 1, nums[i])] = nums[i];
    }
  }
  return len;
};

let binSearch = function (tailTable, left, right, key) {
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (tailTable[middle] === key) return middle;
    if (tailTable[middle] < key) left = middle + 1;
    else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(longestIncreasingSubsequence([4, 2, 3, 6, 10, 1, 12]));
console.log(longestIncreasingSubsequence([-4, 10, 3, 7, 15]));
