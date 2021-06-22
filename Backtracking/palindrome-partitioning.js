/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  let dp = Array(s.length);
  backtrack([], result, s, 0, dp);
  return result;
};

let backtrack = function (partialSolution, completeSolution, s, start, dp) {
  if (start >= s.length) {
    completeSolution.push([...partialSolution]);
  }

  dp[start] = dp[start] || [];
  for (let candidate = start; candidate < s.length; candidate++) {
    if (s[start] === s[candidate] && (candidate - start <= 2 || dp[start + 1][end - 1])) {
      dp[start][candidate] = true;
      partialSolution.push(s.substring(start, candidate + 1));
      backtrack(partialSolution, completeSolution, s, candidate + 1, dp);
      partialSolution.pop();
    }
  }
};

console.log(partition("aab"));
console.log(partition("a"));
