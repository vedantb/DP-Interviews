const findLRSLength = function (s1) {
  function findLRSLengthRecursive(str, i1, i2) {
    if (i1 === str.length || i2 === str.length) return 0;

    if (i1 !== i2 && str[i1] === str[i2]) return 1 + findLRSLengthRecursive(str, i1 + 1, i2 + 1);

    const c1 = findLRSLengthRecursive(str, i1, i2 + 1);
    const c2 = findLRSLengthRecursive(str, i1 + 1, i2);
    return Math.max(c1, c2);
  }
  return findLRSLengthRecursive(s1, 0, 0);
};

console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength("tomorrow")}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength("aabdbcec")}`);
console.log(`Length of Longest Repeating Subsequence: ---> ${findLRSLength("fmff")}`);
