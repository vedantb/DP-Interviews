function numTrees(n) {
  // We would do bottom-up DP:
  // In this problem CUTS represent ROOT of each BST structurally possible.
  /**
   * We would make each and every integer from 1 to n the root and
   * grab the result for left sub tree and right subtree and take the product.
   * For every root, we compute the total number of unique structural BST possible for
   * left subtree and right subtree and multiply them with each other to get the result for the root.
   *
   * Optimal Substructure: We will start with lesser lengths and go on using the results of those lesser length
   * subproblem while computing higher length subproblems.
   */

  let dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let beg = 0; beg <= n - len; beg++) {
      let end = beg + len - 1;
      dp[beg][end] = 0;
      for (let cut = beg; cut <= end; cut++) {
        // start: the below part is common for many problems of this category of DP
        if (len === 1) dp[beg][end] = 1;
        else if (cut - 1 < beg) {
          dp[beg][end] += dp[cut + 1][end];
        } else if (cut + 1 > end) {
          dp[beg][end] += dp[beg][cut - 1];
        } else {
          dp[beg][end] += dp[beg][cut - 1] * dp[cut + 1][end];
        }
      }
    }
  }
  return dp[0][n - 1];
}

console.log(numTrees(9));
