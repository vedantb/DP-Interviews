/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  if (n < 2) return [];
  let res = [];
  backtrack(n, [], res, 2);
  return res;
};

let backtrack = function (n, partialSolution, completeSolution, start) {
  if (n <= 1) {
    if (partialSolution.length > 1) {
      completeSolution.push([...partialSolution]);
    }
    return;
  }
  for (let i = start; i <= n; i++) {
    if (n % i === 0) {
      partialSolution.push(i);
      backtrack(n / i, partialSolution, completeSolution, i);
      partialSolution.pop();
    }
  }
};
