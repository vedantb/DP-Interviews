// NOTE: You can always just to str.length - longestPalindromicSubsequence.length
let findMinInsertions = function (str) {
  if (!str || str.length === 0) return 0;

  let dp = Array(str.length)
    .fill(0)
    .map(() => Array(str.length).fill(0));

  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 0;
  }

  for (let startIndex = str.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < str.length; endIndex++) {
      if (str[startIndex] === str[endIndex]) {
        dp[startIndex][endIndex] = dp[startIndex + 1][endIndex - 1];
      } else {
        dp[startIndex][endIndex] = Math.min(dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1]) + 1;
      }
    }
  }

  return dp[0][str.length - 1];
};

console.log(findMinInsertions("abcd"));
console.log(findMinInsertions("aa"));
console.log(findMinInsertions("ab"));
