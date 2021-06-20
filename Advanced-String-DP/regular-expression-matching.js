let isMatch = function (str, regExp) {
  if (str.length === 0 && regExp.length === 0) return true;

  if (regExp.length === 0) return false;

  let dp = Array(str.length + 1)
    .fill(false)
    .map(() => Array(regExp.length + 1).fill(false));

  dp[0][0] = true; // empty str and empty regexp

  // Empty string qualifies for regex like a*, a*b*, a*b*c* and so on
  for (let i = 2; i <= regExp.length; i++) {
    if (regExp[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i <= str.length; i++) {
    for (let j = 1; j <= regExp.length; j++) {
      if (str[i - 1] === regExp[j - 1] || regExp[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }

      if (regExp[j - 1] === "*") {
        let zeroOccurrence = dp[i][j - 2];

        let nonZeroOccurrence = false;
        if (regExp[j - 2] === "." || str[i - 1] === regExp[j - 2]) {
          nonZeroOccurrence = dp[i - 1][j];
        }

        dp[i][j] = zeroOccurrence || nonZeroOccurrence;
      }
    }
  }

  return dp[str.length][regExp.length];
};
