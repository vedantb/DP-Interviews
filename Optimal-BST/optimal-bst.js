let optimalSearchTree = function (keys, freq) {
  let n = keys.length;
  let cost = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    cost[i][i] = freq[i];
  }

  for (let len = 2; len <= n; len++) {
    for (let beg = 0; beg < n - len + 1; beg++) {
      let end = beg + len - 1;
      cost[beg][end] = Infinity;
      for (let root = beg; root <= end; root++) {
        let c = (root > beg ? cost[beg][root - 1] : 0) + (root < end ? cost[root + 1][end] : 0) + sum(freq, beg, end);

        if (c < cost[beg][end]) cost[beg][end] = c;
      }
    }
  }
  return cost[0][n - 1];
};

let sum = function (freq, i, j) {
  let sum = 0;
  for (let k = i; k <= j; k++) {
    if (k >= freq.length) continue;
    sum += freq[k];
  }
  return sum;
};

console.log(optimalSearchTree([10, 12, 20], [34, 8, 50])); // 142
console.log(optimalSearchTree([10, 12], [34, 50]));
