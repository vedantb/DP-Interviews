const findMinOperations = function (s1, s2) {
  const dp = [];

  function findMinOperationsRecursive(s1, s2, i1, i2) {
    dp[i1] = dp[i1] || [];
    if (typeof dp[i1][i2] === "undefined") {
      // if we have reached the end of s1, then we have to insert all the remaining characters of s2
      if (i1 === s1.length) dp[i1][i2] = s2.length - i2;
      // if we have reached the end of s2, then we have to delete all the remaining characters of s1
      else if (i2 === s2.length) dp[i1][i2] = s1.length - i1;
      // If the strings have a matching character, we can recursively match for the remaining lengths
      else if (s1[i1] === s2[i2]) dp[i1][i2] = findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1);
      else {
        const c1 = findMinOperationsRecursive(s1, s2, i1 + 1, i2); // delete
        const c2 = findMinOperationsRecursive(s1, s2, i1, i2 + 1); // insert
        const c3 = findMinOperationsRecursive(s1, s2, i1 + 1, i2 + 1); // replace
        dp[i1][i2] = 1 + Math.min(c1, Math.min(c2, c3));
      }
    }

    return dp[i1][i2];
  }
  return findMinOperationsRecursive(s1, s2, 0, 0);
};

console.log(`Minimum Edit Distance: ---> ${findMinOperations("bat", "but")}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations("abdca", "cbda")}`);
console.log(`Minimum Edit Distance: ---> ${findMinOperations("passpot", "ppsspqrt")}`);
