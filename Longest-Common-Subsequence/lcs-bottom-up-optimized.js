const findLCSLength = function (s1, s2) {
  const dp = Array(s2.length + 1).fill(0);

  let maxLength = 0;
  for (let i = 1; i <= s1.length; i++) {
    let prevValue = dp[0];
    for (let j = 1; j <= s2.length; j++) {
      let tempPrevValue = dp[j];
      if (s1[i - 1] === s2[j - 1]) {
        dp[j] = 1 + prevValue;
      } else {
        dp[j] = Math.max(dp[j - 1], tempPrevValue);
      }
      maxLength = Math.max(maxLength, dp[j]);
      prevValue = tempPrevValue;
    }
  }
  return maxLength;
};

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength("abdca", "cbda")}`);
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength("passport", "ppsspt")}`);
