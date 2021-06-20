let findLPSLength = function (st) {
  let dp = [];
  function findLPSRecursive(st, stIndex, endIndex) {
    if (stIndex > endIndex) return 0;

    if (stIndex === endIndex) return 1;

    dp[stIndex] = dp[stIndex] || [];

    if (typeof dp[stIndex][endIndex] === "undefined") {
      if (st[stIndex] === st[endIndex]) dp[stIndex][endIndex] = 2 + findLPSRecursive(st, stIndex + 1, endIndex - 1);
      else {
        let c1 = findLPSRecursive(st, stIndex + 1, endIndex);
        let c2 = findLPSRecursive(st, stIndex, endIndex - 1);

        dp[stIndex][endIndex] = Math.max(c1, c2);
      }
    }
    return dp[stIndex][endIndex];
  }
  return findLPSRecursive(st, 0, st.length - 1);
};

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pqr"));
