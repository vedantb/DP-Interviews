const findLCSLength = function (s1, s2) {
  const dp = Array(s2.length + 1).fill("");

  for (let i = 1; i <= s1.length; i++) {
    let prevValue = dp[0];
    for (let j = 1; j <= s2.length; j++) {
      let tempPrevValue = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = prevValue + s1[i - 1];
      } else {
        dp[j] = dp[j - 1].length > tempPrevValue.length ? dp[j - 1] : tempPrevValue;
      }
      prevValue = tempPrevValue;
    }
  }
  return dp[s2.length];
};

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength("abdca", "cbda")}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength("passport", "ppsspt")}`);
