const findSPMCount = function (str, pat) {
  const dp = [];

  function findSPMCountRecursive(str, pat, strIndex, patIndex) {
    // if we have reached the end of the pattern
    if (patIndex === pat.length) return 1;

    // if we have reached the end of the string but pattern has still some characters left
    if (strIndex === str.length) return 0;

    dp[strIndex] = dp[strIndex] || [];
    if (dp[strIndex][patIndex] == null) {
      let c1 = 0;
      if (str[strIndex] === pat[patIndex]) {
        c1 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex + 1);
      }
      const c2 = findSPMCountRecursive(str, pat, strIndex + 1, patIndex);
      dp[strIndex][patIndex] = c1 + c2;
    }

    return dp[strIndex][patIndex];
  }
  return findSPMCountRecursive(str, pat, 0, 0);
};

console.log(`Count of pattern in the string: ---> ${findSPMCount("baxmx", "ax")}`);
console.log(`Count of pattern in the string: ---> ${findSPMCount("tomorrow", "tor")}`);
