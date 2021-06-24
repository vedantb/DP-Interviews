let partition = function (s) {
  let res = [];
  let dp = Array(s.length);
  backtrack(res, [], s, 0, dp);
  return res;
};

let backtrack = function (completeSolution, partialSolution, s, start, dp) {
  if (start === s.length) {
    completeSolution.push([...partialSolution]);
    return;
  }
  dp[start] = dp[start] || [];

  for (let i = start; i < s.length; i++) {
    if (s[start] === s[i] && (i - start <= 2 || dp[start + 1][i - 1])) {
      dp[start][i] = true;
      partialSolution.push(s.substring(start, i + 1));
      backtrack(completeSolution, partialSolution, s, i + 1, dp);
      partialSolution.pop();
    }
  }
};
