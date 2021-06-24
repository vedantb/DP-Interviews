/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  let map = {};
  if (!canPermutePalindrome(s, map)) return [];
  let res = [];
  let list = [];
  let mid = "";
  for (let key in map) {
    let val = map[key];
    if (val % 2 !== 0) mid += key;
    for (let i = 0; i < Math.floor(val / 2); i++) list.push(key);
  }
  backtrack(list, mid, Array(list.length), [], res);
  return res;
};

let backtrack = function (list, mid, used, partialSolution, completeSolution) {
  if (partialSolution.length === list.length) {
    completeSolution.push(partialSolution.join("") + mid + partialSolution.reverse().join(""));
    partialSolution.reverse();
    return;
  }

  for (let i = 0; i < list.length; i++) {
    if (i > 0 && list[i] === list[i - 1] && !used[i - 1]) continue;
    if (used[i]) continue;
    used[i] = true;
    partialSolution.push(list[i]);
    backtrack(list, mid, used, partialSolution, completeSolution);
    partialSolution.pop();
    used[i] = false;
  }
};

var canPermutePalindrome = function (s, map) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    if (map[s[i]] % 2 === 0) count--;
    else count++;
  }
  return count <= 1;
};

console.log(generatePalindromes("babab"));
