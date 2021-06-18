let maxEnvelopes = function (envelopes) {
  if (!envelopes || envelopes.length === 0) return 0;

  envelopes.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));

  let tailTable = [];

  tailTable[0] = envelopes[0];
  let len = 1;
  for (let envelope of envelopes) {
    if (envelope[0] < tailTable[0]) tailTable[0] = envelope[0];
    else if (envelope[0] > tailTable[len - 1]) {
      tailTable[len++] = envelope[0];
    } else {
      tailTable[binSearch(tailTable, 0, len - 1, envelope[1])] = envelope[0];
    }
  }
  return len;
};

let binSearch = function (tailTable, left, right, key) {
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (tailTable[middle] === key) return middle;
    if (tailTable[middle] < key) left = middle + 1;
    else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(
  maxEnvelopes([
    [2, 100],
    [3, 200],
    [5, 250],
    [4, 300],
    [6, 360],
    [6, 370],
    [7, 380],
    [5, 400],
    [5, 500]
  ])
);
