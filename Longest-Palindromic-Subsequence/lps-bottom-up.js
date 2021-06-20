let findLPSLength = function (s) {
  let dp = Array(s.length)
    .fill(0)
    .map(() => Array(s.length).fill(0));

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let startIndex = s.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < s.length; endIndex++) {
      if (s[startIndex] === s[endIndex]) {
        dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1];
      } else {
        dp[startIndex][endIndex] = Math.max(dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pqr"));
