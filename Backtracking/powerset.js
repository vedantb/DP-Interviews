/**
 * There are multiple ways to generate a power set. All of them are useful in helping us solve
 * certain kinds of problems
 *
 * 1. Concept of Inclusion and Exclusion using Boolean Array
 *
 * For every element in the given array or list, we have choice to either include or not include it
 * in a subset. Powerset is the exhaustive set of subsets which contain all the possible subsets,
 * which means, we get powerset by making all possible choices for all given elements.
 *
 * For each element nums[i] we have option to either include or exclude it from current subset and
 * for each of these two choices for nums[i] we consider all combinations of the choice of
 * inclusion and exclusion for the rest of the elements in given array nums[].
 */

let subsets = function (nums) {
  let res = [];
  backtrack(nums, 0, Array(nums.length), res);
  return res;
};

let backtrack = function (nums, index, partialSolution, completeSolution) {
  if (index > nums.length - 1) {
    let subset = [];
    for (let i = 0; i < partialSolution.length; i++) {
      if (partialSolution[i]) subset.push(nums[i]);
    }
    completeSolution.push(subset);
    return;
  }

  partialSolution[index] = true;
  backtrack(nums, index + 1, partialSolution, completeSolution);
  partialSolution[index] = false;
  backtrack(nums, index + 1, partialSolution, completeSolution);
};

console.log(subsets([1, 2, 3])); // [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]

/**
 *
 * 2. Binary Number Sequence from 0 to (2^N - 1):
 * Binary representation is the key to solving all subset generation problems.
 *
 * To generate power set for N elements, simply count from 0 to 2^N - 1.
 * Use the 0's and 1's in the binary numbers to form the subsets.
 * 1 at index i of the binary number would indicate that element nums[i] is included in the subset,
 * whereas 0 at index i would mean nums[i] is excluded.
 *
 * e.g. [1,2,3]
 * 000 => since all 0s []
 * 001 => we get subset [3] since only index 2 (0-based indexing) has 1 and nums[2] = 3
 * 010 -> we get subset [2] since only index 1 (0-based indexing) has 1 and nums[1] = 3
 * 011 -> we get subset [2, 3] since index 1 and 2 have 1 and nums[2] = 3
 * 100 -> we get subset [1] since index 1 (0-based index) has 1 and nums[2] = 3
 * 101 -> we get subset [1, 3]
 * 110 -> we get subset [1, 2]
 * 111 -> we get subset [1, 2, 3] since we have 1's in all three places
 */

let subsetsBitMask = function (nums) {
  let output = [];
  let n = nums.length;
  for (let i = 0; i < Math.pow(2, n); i++) {
    let bitMask = (i | (1 << n)).toString(2);
    bitMask = bitMask.substring(bitMask.length - n);
    let subset = [];
    for (let index = 0; index < bitMask.length; index++) {
      if (bitMask[index] === "1") subset.push(nums[index]);
    }
    output.push(subset);
  }
  return output;
};
console.log(subsetsBitMask([3, 2, 4, 1]));

let subsetsBitMask2 = function (nums) {
  let output = [];
  let n = nums.length;
  for (let i = Math.pow(2, n); i < Math.pow(2, n + 1); i++) {
    let bitMask = i.toString(2);
    bitMask = bitMask.substring(1);
    let subset = [];
    for (let index = 0; index < bitMask.length; index++) {
      if (bitMask[index] === "1") subset.push(nums[index]);
    }
    output.push(subset);
  }
  return output;
};

console.log(subsetsBitMask2([3, 2, 4, 1]));

/**
 * 3. Lexicographic Order:
 * Lexicographic Order means sorted order and is often the most natural way to generate combinatorial objects.
 * The power set for [1, 2, 3] in lexicographic order are [ [], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3] ].
 *
 * Let's rearrange the output a bit to be able to see any pattern present there. This is super important for most Backtracking problems. Please do not underestimate the power of observation or the ability to identify any useful pattern present in the given problem.
 * [1]      [2]   [3]  []
 * [1,2]    [2,3]
 * [1,2,3]
 * [1,3]
 *
 * So we see the largest subset in the powerset is the given input itself, for example for input = [1, 2, 3]
 * the largest subset in the powerset is [1, 2, 3] and the smallest subset is of length 0 since [] is the smallest
 * subset. The length of the subsets in the powerset ranges from 0 to length(input array) including every length
 * possible in [0, input.length].
 *
 * For a given array nums[] of length n, we have subsets starting with nums[i] for all i = 0 to (n - 1).
 * We get subsets starting with nums[i] by computing all subsets for nums[(i + 1)...(n - 1)]
 * and then prepending nums[i] to each of them.
 * We get the Power Set by computing all subsets for all nums[i], i = 0 to (n - 1).
 */

let subsetsLexicographic = function (nums) {
  let res = new Set();
  res.backtrackLexicographic(nums, 0, [], res);
  return res;
};

let backtrackLexicographic = function (nums, index, partialSolution, completeSolution) {
  if (index > nums.length - 1) {
    completeSolution.push([...partialSolution]);
    return;
  }
  completeSolution.push([...partialSolution]);

  for (let i = index; i < nums.length; i++) {
    partialSolution.push(nums[i]);
    backtrackLexicographic(nums, i + 1, partialSolution, completeSolution);
    partialSolution.pop();
  }
};

console.log(subsetsLexicographic([1, 2, 3]));
