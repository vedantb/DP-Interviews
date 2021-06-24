// https://leetcode.com/problems/gray-code/

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let result = [];
  result.push(0);
  let isPresent = new Set();
  isPresent.add(0);
  backtrack(result, n, isPresent);
  return result;
};

let backtrack = function (result, n, isPresent) {
  if (result.length === Math.pow(2, n)) return true;

  let current = result[result.length - 1];
  for (let i = 0; i < n; i++) {
    let next = current ^ (1 << i);
    if (!isPresent.has(next)) {
      isPresent.add(next);
      result.push(next);
      if (backtrack(result, n, isPresent)) return true;
      isPresent.delete(next);
      result.pop();
    }
  }
};
