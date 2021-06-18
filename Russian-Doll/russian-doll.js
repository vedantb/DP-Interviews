let maxEnvelopes = function (envelopes) {
  if (!envelopes || envelopes.length === 0) return 0;

  // Just like Box stacking, we do an ascending order sorting on area
  // Since one evelope can fit into another if and only if the width
  // and height of one envelope is greater than width and height of the other
  // envelope. This means that if E1 goes inside E2, Area(E1) < Area(E2)
  envelopes.sort((a, b) => a[0] * a[1] - b[0] * b[1]);

  let len = envelopes.length;
  let longestIncreasingSubsequence = Array(len).fill(1);
  let max = 1;
  // EZ PZ usual LIS
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
        longestIncreasingSubsequence[i] = Math.max(
          longestIncreasingSubsequence[i],
          longestIncreasingSubsequence[j] + 1
        );
      }
    }
    max = Math.max(max, longestIncreasingSubsequence[i]);
  }
  return max;
};

console.log(
  maxEnvelopes(
    [
      [2, 100],
      [3, 200],
      [4, 300],
      [5, 500],
      [5, 400],
      [5, 250],
      [6, 370],
      [6, 360],
      [7, 380]
    ],
    3
  )
);
