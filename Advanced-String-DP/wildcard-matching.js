// https://leetcode.com/problems/wildcard-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s.length === 0 && p.length === 0) return true;

  if (p.length === 0) return false;

  let dp = Array(s.length + 1)
    .fill(false)
    .map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === "*") dp[0][i] = dp[0][i - 1];
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      let wildcardChar = p[j - 1];
      if (wildcardChar === "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (wildcardChar === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else {
        dp[i][j] = wildcardChar === s[i - 1] && dp[i - 1][j - 1];
      }
    }
  }
  return dp[s.length][p.length];
};
