const findLCSLength = function (s1, s2) {
  const dp = {};
  function findLCSLengthRecursive(s1, s2, i1, i2, count) {
    if (i1 === s1.length || i2 === s2.length) return count;

    let key = `${i1}|${i2}|${count}`;
    if (key in dp) return dp[key];

    let c1 = count;
    if (s1[i1] === s2[i2]) {
      c1 = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
    }

    const c2 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);
    const c3 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);

    dp[key] = Math.max(c1, Math.max(c2, c3));
    return dp[key];
  }
  return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength("abdca", "cbda")}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength("passport", "ppsspt")}`);
