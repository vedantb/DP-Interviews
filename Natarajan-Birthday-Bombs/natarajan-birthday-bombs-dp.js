let birthdayBombs = function (kickStrengths, painTolerance) {
  const n = kickStrengths.length;
  const dp = Array(painTolerance + 1).fill(0);
  const index = Array(painTolerance + 1).fill(0);

  for (let i = 0; i <= painTolerance; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= kickStrengths[j] && dp[i - kickStrengths[j]] + 1 > dp[i]) {
        dp[i] = 1 + dp[i - kickStrengths[j]];
        index[i] = j;
      }
    }
  }

  let results = [];
  let val = painTolerance;
  while (val > 0 && val >= kickStrengths[index[val]]) {
    results.push(index[val]);
    val -= kickStrengths[index[val]];
  }
  return results;
};

console.log(`Maximum number of kicks: ---> ${birthdayBombs([3, 4], 12)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([6, 8, 5, 4, 7], 11)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([8, 8, 6, 5, 4], 12)}`);
