let maxSumSubarray = function (arr) {
  if (!arr || arr.length === 0) return 0;
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  return maxGlobal;
};

console.log(maxSumSubarray([-2, -3, -4]));
console.log(maxSumSubarray([0]));
console.log(maxSumSubarray([-1]));
console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
