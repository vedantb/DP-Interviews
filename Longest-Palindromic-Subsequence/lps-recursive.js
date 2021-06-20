let findLPSLength = function (st) {
  function findLPSRecursive(st, stIndex, endIndex) {
    if (stIndex > endIndex) return 0;

    if (stIndex === endIndex) return 1;

    if (st[stIndex] === st[endIndex]) return 2 + findLPSRecursive(st, stIndex + 1, endIndex - 1);

    let c1 = findLPSRecursive(st, stIndex + 1, endIndex);
    let c2 = findLPSRecursive(st, stIndex, endIndex - 1);

    return Math.max(c1, c2);
  }
  return findLPSRecursive(st, 0, st.length - 1);
};

console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
console.log("Length of LPS ---> " + findLPSLength("pqr"));
