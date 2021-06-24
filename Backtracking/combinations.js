// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  backtrack(1, n, k, result, []);
  return result;
};

let backtrack = function (index, n, k, result, partialSolution) {
  if (partialSolution.length === k) {
    result.push([...partialSolution]);
    return;
  }
  for (let i = index; i <= n; i++) {
    partialSolution.push(i);
    backtrack(i + 1, n, k, result, partialSolution);
    partialSolution.pop();
  }
};
