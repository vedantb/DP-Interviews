var minCut = function (s) {
  if (!s || s.length <= 1) return 0;

  let n = s.length;
  let isPalindrome = Array(n)
    .fill(false)
    .map(() => Array(n).fill(false));

  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      let subStringLength = j - i + 1;
      if (subStringLength === 1) isPalindrome[i][j] = true;
      else if (subStringLength === 2 && s[i] === s[j]) isPalindrome[i][j] = true;
      else {
        isPalindrome[i][j] = s[i] === s[j] && isPalindrome[i + 1][j - 1];
      }
    }
  }

  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      let subStringLength = j - i + 1;
      if (subStringLength === 1) dp[i][j] = 0;
      else if (subStringLength === 2) {
        if (isPalindrome[i][j]) dp[i][j] = 0;
        else dp[i][j] = 1;
      } else {
        if (isPalindrome[i][j]) dp[i][j] = 0;
        else {
          dp[i][j] = Infinity;
          for (let k = i; k <= j - 1; k++) {
            dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + 1);
          }
        }
      }
    }
  }
  return dp[0][n - 1];
};

console.log(minCut("abb"));
