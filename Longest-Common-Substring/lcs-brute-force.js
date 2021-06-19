const findLCSLength = function (s1, s2) {
  function findLCSLengthRecursive(s1, s2, i1, i2, count) {
    if (i1 === s1.length || i2 === s2.length) return count;

    if (s1[i1] === s2[i2]) {
      count = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
    }

    const c1 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);
    const c2 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);

    return Math.max(count, Math.max(c1, c2));
  }
  return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength("abdca", "cbda")}`);
console.log(`Length of Longest Common Substring: ---> ${findLCSLength("passport", "ppsspt")}`);
