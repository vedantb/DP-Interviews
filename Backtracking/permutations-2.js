// https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let results = [];
  let counter = {};
  for (let num of nums) {
    counter[num] = (counter[num] || 0) + 1;
  }

  let partialSolution = [];
  backtrack(partialSolution, nums.length, counter, results);
  return results;
};

let backtrack = function (partialSolution, n, counter, completeSolution) {
  if (partialSolution.length === n) {
    completeSolution.push([...partialSolution]);
    return;
  }

  for (let key in counter) {
    let num = key;
    let count = counter[key];
    if (count === 0) continue;
    partialSolution.push(num);
    counter[num] = count - 1;

    backtrack(partialSolution, n, counter, completeSolution);

    partialSolution.pop();
    counter[num] = count;
  }
};
