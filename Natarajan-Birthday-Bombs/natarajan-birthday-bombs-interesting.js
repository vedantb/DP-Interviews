let birthdayBombs = function (kickStrengths, painTolerance) {
  let results = [];
  const minStrength = Math.min.apply(Math, kickStrengths);
  // This is the buffer left after we maximize the number of kicks with the min strength
  let availableBuffer = painTolerance % minStrength;

  let index = 0;
  while (results.length < Math.floor(painTolerance / minStrength)) {
    if (kickStrengths[index] - minStrength <= availableBuffer) {
      availableBuffer -= kickStrengths[index] - minStrength;
      results.push(index);
    } else {
      index++;
    }
  }
  return results;
};

console.log(`Maximum number of kicks: ---> ${birthdayBombs([4, 3], 14)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([6, 8, 5, 4, 7], 11)}`);
console.log(`Maximum number of kicks: ---> ${birthdayBombs([8, 8, 6, 5, 4], 12)}`);
