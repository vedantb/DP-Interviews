// https://leetcode.com/problems/generate-parentheses/

/**
 * 1. We always have room for appending one more opening brace "(" to a given partial solution
 * as long as partial solution contains less than n opening braces.
 *
 * 2. We can append closing brace ")" to our partial solution only when we have less number of closing braces
 * than opening braces in our current partial solution.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  backtrack(res, [], 0, 0, n);
  return res;
};

let backtrack = function (res, curr, open, close, max) {
  if (curr.length === max * 2) {
    res.push(curr.join(""));
    return;
  }
  if (open < max) {
    curr.push("(");
    backtrack(res, curr, open + 1, close, max);
    curr.pop();
  }

  if (close < open) {
    curr.push(")");
    backtrack(res, curr, open, close + 1, max);
    curr.pop();
  }
};
