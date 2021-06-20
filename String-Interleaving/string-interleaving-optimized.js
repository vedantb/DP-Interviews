const findSI = function (m, n, p) {
  if (m.length + n.length !== p.length) return false;
  const dp = Array(n.length + 1).fill(false);

  for (let mIndex = 0; mIndex <= m.length; mIndex++) {
    for (let nIndex = 0; nIndex <= n.length; nIndex++) {
      // if m and n are both empty, p must be empty too
      if (mIndex === 0 && nIndex === 0) dp[nIndex] = true;
      // if 'm' is empty, we need to check the leterleaving with 'n' only
      else if (mIndex === 0) {
        dp[nIndex] = dp[nIndex - 1] && n[nIndex - 1] === p[mIndex + nIndex - 1];
        // if 'n' is empty, we need to check the leterleaving with 'm' only
      } else if (nIndex === 0) {
        dp[nIndex] = dp[nIndex] && m[mIndex - 1] === p[mIndex + nIndex - 1];
      } else {
        dp[nIndex] =
          (dp[nIndex] && m[mIndex - 1] === p[mIndex + nIndex - 1]) ||
          (dp[nIndex - 1] && n[nIndex - 1] === p[mIndex + nIndex - 1]);
      }
    }
  }
  return dp[n.length];
};

console.log(`String leterleaving: ---> ${findSI("abd", "cef", "abcdef")}`);
console.log(`String leterleaving: ---> ${findSI("abd", "cef", "adcbef")}`);
console.log(`String leterleaving: ---> ${findSI("abc", "def", "abdccf")}`);
console.log(`String leterleaving: ---> ${findSI("abcdef", "mnop", "mnaobcdepf")}`);
