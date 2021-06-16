let birthdayBombs = function (kickStrengths, painTolerance) {
  let results = [];
  let comb = [];
  results = birthdayBombsRecursive(kickStrengths, painTolerance, comb, results, 0);
  return results;
};

let birthdayBombsRecursive = function (kickStrengths, painTolerance, comb, results, currentIndex) {
  if (painTolerance < 0 || currentIndex >= kickStrengths.length || kickStrengths[currentIndex] > painTolerance)
    return results;

  while (currentIndex < kickStrengths.length) {
    comb.push(currentIndex);
    results = birthdayBombsRecursive(
      kickStrengths,
      painTolerance - kickStrengths[currentIndex],
      comb,
      results,
      currentIndex
    );
    comb.pop();
    currentIndex = currentIndex + 1;
  }

  if (comb.length > results.length) {
    results = [];
    results.push(...comb);
  }
  return results;
};

console.log(`Maximum number of kicks: ---> ${birthdayBombs([3, 4], 12)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([6, 8, 5, 4, 7], 11)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([8, 8, 6, 5, 4], 12)}`);
