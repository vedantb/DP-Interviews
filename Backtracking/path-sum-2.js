/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = [];
  backtrack(root, result, [], targetSum);
  return result;
};

let backtrack = function (root, completeSolution, partialSolution, remainingSum) {
  if (root === null) return;
  partialSolution.push(root.val);
  if (remainingSum === root.val && root.left === null && root.right === null) {
    completeSolution.push([...partialSolution]);
    partialSolution.pop();
    return;
  }

  backtrack(root.left, completeSolution, partialSolution, remainingSum - root.val);
  backtrack(root.right, completeSolution, partialSolution, remainingSum - root.val);
  partialSolution.pop();
};
