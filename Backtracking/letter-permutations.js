// https://leetcode.com/problems/letter-case-permutation

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

/**
 * Example 1:
 * Input: S = "a1b2"
 * Output: ["a1b2","a1B2","A1b2","A1B2"]
 */

/**
 * A great example to understand how the backtracking template works. This is just to get familiar with backtracking
 *
 * Another thing to see here is how backtracking can help express our thought process by just writing code which
 * adheres to the template
 */

let letterCasePermutations = function (word) {
  if (!word || word.length === 0) return [];
  let res = [];
  backtrack(word, word.split(""), res, 0);
  return res;
};

let backtrack = function (word, partialSolution, completeSolution, index) {
  if (index === word.length) {
    completeSolution.push(partialSolution.join(""));
    return;
  }

  // If it's a digit we just increment the index
  if (partialSolution[index] >= "0" && partialSolution[index] <= "9") {
    backtrack(word, partialSolution, completeSolution, index + 1);
    return;
  }

  // If it's not a digit, we try both lowercase and uppercase characters
  partialSolution[index] = partialSolution[index].toLowerCase();
  backtrack(word, partialSolution, completeSolution, index + 1);

  partialSolution[index] = partialSolution[index].toUpperCase();
  backtrack(word, partialSolution, completeSolution, index + 1);
};

console.log(letterCasePermutations("str"));
