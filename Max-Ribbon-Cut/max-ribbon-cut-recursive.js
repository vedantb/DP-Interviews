let countRibbonPieces = function (ribbonLengths, total) {
  const result = countRibbonPiecesRecursive(ribbonLengths, total, 0);
  return result === Number.MIN_VALUE ? -1 : result;
};

let countRibbonPiecesRecursive = function (ribbonLengths, total, currentIndex) {
  if (total === 0) return 0;

  if (ribbonLengths.length === 0 || currentIndex >= ribbonLengths.length) return Number.MIN_VALUE;

  let c1 = Number.MIN_VALUE;
  if (ribbonLengths[currentIndex] <= total) {
    const result = countRibbonPiecesRecursive(ribbonLengths, total - ribbonLengths[currentIndex], currentIndex);
    if (result !== Number.MIN_VALUE) {
      c1 = result + 1;
    }
  }

  const c2 = countRibbonPiecesRecursive(ribbonLengths, total, currentIndex + 1);

  return Math.max(c1, c2);
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);
