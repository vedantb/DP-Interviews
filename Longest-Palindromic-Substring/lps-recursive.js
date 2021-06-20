let findLPSLength = function (str) {
  function findLPSLengthRecursive(str, startIndex, endIndex) {
    if (startIndex > endIndex) return 0;

    if (startIndex === endIndex) return 1;

    if (str[startIndex] === str[endIndex]) {
      const remainingLength = endIndex - startIndex - 1;
      if (remainingLength === findLPSLengthRecursive(str, startIndex + 1, endIndex - 1)) {
        return remainingLength + 2;
      }
    }

    const c1 = findLPSLengthRecursive(str, startIndex + 1, endIndex);
    const c2 = findLPSLengthRecursive(str, startIndex, endIndex - 1);

    return Math.max(c1, c2);
  }
  return findLPSLengthRecursive(str, 0, str.length - 1);
};

console.log(`Length of LPS ---> ${findLPSLength("abdbca")}`);
console.log(`Length of LPS ---> ${findLPSLength("cddpd")}`);
console.log(`Length of LPS ---> ${findLPSLength("pqr")}`);
