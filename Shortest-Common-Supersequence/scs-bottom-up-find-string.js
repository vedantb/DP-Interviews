/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var shortestCommonSupersequence = function (s1, s2) {
  const dp = Array(s1.length + 1)
    .fill("")
    .map(() => Array(s2.length + 1).fill(""));

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1];
  }
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length < dp[i][j - 1].length ? dp[i - 1][j] + s1[i - 1] : dp[i][j - 1] + s2[j - 1];
      }
    }
  }
  return dp[s1.length][s2.length];
};
