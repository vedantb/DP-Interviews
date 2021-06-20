const findMinOperations = function (s1, s2) {
  function findMinOperationsHelper(s1, s2, i1, i2) {
    if (i1 === s1.length) return s2.length - i2;
    if (i2 === s2.length) return s1.length - i1;

    if (s1[i1] === s2[i2]) return findMinOperationsHelper(s1, s2, i1 + 1, i2 + 1);

    let c1 = 1 + findMinOperationsHelper(s1, s2, i1 + 1, i2);
    let c2 = 1 + findMinOperationsHelper(s1, s2, i1, i2 + 1);
    let c3 = 1 + findMinOperationsHelper(s1, s2, i1 + 1, i2 + 1);

    return Math.min(c1, Math.min(c2, c3));
  }
  return findMinOperationsHelper(s1, s2, 0, 0);
};

console.log(`Minimum Edit Distance: ---> ${findMinOperations("bat", "but")}`); // 1
console.log(`Minimum Edit Distance: ---> ${findMinOperations("abdca", "cbda")}`); // 2
console.log(`Minimum Edit Distance: ---> ${findMinOperations("passpot", "ppsspqrt")}`); // 3
