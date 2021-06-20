let findLPSLength = function (str) {
  const dp = [];
  function findLPSLengthRecursive(str, startIndex, endIndex) {
    if (startIndex > endIndex) return 0;

    if (startIndex === endIndex) return 1;

    dp[startIndex] = dp[startIndex] || [];

    if (typeof dp[startIndex][endIndex] === "undefined") {
      if (str[startIndex] === str[endIndex]) {
        const remainingLength = endIndex - startIndex - 1;
        if (remainingLength === findLPSLengthRecursive(str, startIndex + 1, endIndex - 1)) {
          dp[startIndex][endIndex] = remainingLength + 2;
          return dp[startIndex][endIndex];
        }
      }

      const c1 = findLPSLengthRecursive(str, startIndex + 1, endIndex);
      const c2 = findLPSLengthRecursive(str, startIndex, endIndex - 1);

      dp[startIndex][endIndex] = Math.max(c1, c2);
    }
    return dp[startIndex][endIndex];
  }
  return findLPSLengthRecursive(str, 0, str.length - 1);
};

console.log(`Length of LPS ---> ${findLPSLength("abdbca")}`);
console.log(`Length of LPS ---> ${findLPSLength("cddpd")}`);
console.log(`Length of LPS ---> ${findLPSLength("pqr")}`);
