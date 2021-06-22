let letterCombinations = function (digits) {
  let res = [];
  if (!digits || digits.length === 0) return res;

  let digitsToCharacterMap = createMapping();
  backtrack(0, digits, [], res, digitsToCharacterMap);
  return res;
};

let backtrack = function (index, digits, partialSolution, completeSolution, digitsToCharacterMap) {
  if (partialSolution.length === digits.length) {
    completeSolution.push(partialSolution.join(""));
    return;
  }

  let candidates = digitsToCharacterMap[digits[index]];
  for (let digit of candidates) {
    partialSolution.push(digit);
    backtrack(index + 1, digits, partialSolution, completeSolution, digitsToCharacterMap);
    partialSolution.pop();
  }
};

let createMapping = function () {
  let map = {};
  map["0"] = ["0"];
  map["1"] = ["1"];
  map["2"] = ["a", "b", "c"];
  map["3"] = ["d", "e", "f"];
  map["4"] = ["g", "h", "i"];
  map["5"] = ["j", "k", "l"];
  map["6"] = ["m", "n", "o"];
  map["7"] = ["p", "q", "r", "s"];
  map["8"] = ["t", "u", "v"];
  map["9"] = ["w", "x", "y", "z"];

  return map;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
