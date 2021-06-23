// https://leetcode.com/problems/word-squares/

let wordSquares = function (words) {
  if (!words || words.length === 0 || words[0].length === 0) return [];
  let N = words[0].length;
  let prefixMap = {};
  buildPrefixMap(prefixMap, words);
  let completeSolution = [];
  for (let word of words) {
    let partialSolution = [word];
    backtrack(1, partialSolution, completeSolution, N, prefixMap);
  }
  return completeSolution;
};

let backtrack = function (step, partialSolution, completeSolution, N, prefixMap) {
  if (step === N) {
    completeSolution.push([...partialSolution]);
    return;
  }

  let prefix = "";
  for (let word of partialSolution) {
    prefix += word[step];
  }
  for (let candidate of getSuitableCandidates(prefix, prefixMap)) {
    partialSolution.push(candidate);
    backtrack(step + 1, partialSolution, completeSolution, N, prefixMap);
    partialSolution.pop();
  }
};

let getSuitableCandidates = function (prefix, prefixMap) {
  let wordList = prefixMap[prefix] || [];
  return wordList;
};

let buildPrefixMap = function (prefixMap, words) {
  let N = words[0].length;
  for (let word of words) {
    for (let i = 1; i < N; i++) {
      let prefix = word.substring(0, i);
      prefixMap[prefix] = prefixMap[prefix] || [];
      prefixMap[prefix].push(word);
    }
  }
};

console.log(wordSquares(["area", "lead", "wall", "lady", "ball"]));
