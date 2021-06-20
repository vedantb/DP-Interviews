# Optimal Path To Target Problems

The DP problems belonging to this category, in its simplest form, looks like below or some kind of variations of it:

- Given a target find minimum (maximum) cost / path / sum to reach the target.

The solution for this kind of problems, in a very generalized form, would often look like below:

1. Choose optimal (minimal or maximal, as the case may be) path among all possible paths that lead to the current state, and then add value for the current state.

2. `routes[curr] = min(routes[curr - 1], routes[curr - 2], ... , routes[curr - k]) + cost[i]`
   where current target can be reached only from (curr - 1), (curr - 2), ... (curr - k).

3. Overall the solution would look like this:

```js
for (let curr = 1; curr <= target; curr++) {
  for (let k = 0; k < waysToReachTarget.length; k++) {
    dp[i] = min(dp[curr], dp[waysToReachTarget[k]] + cost / path);
  }
}
return dp[target];
```

## Example Problem:

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example:

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

**Solution:**

```js
let minPathSum = function (grid) {
  if (!grid || grid.length === 0) return null;

  let m = grid.length;
  let n = grid[0].length;

  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity;
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else {
        if (i - 1 >= 0) {
          dp[i][j] = dp[i - 1][j] + grid[i][j];
        }
        if (j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + grid[i][j]);
        }
      }
    }
  }
  return dp[m - 1][n - 1];
};
```

## Problem 1: Minimum Cost Tickets

In a country popular for train travel, you have planned some train traveling one year in advance. The days of the year that you will travel is given as an array days. Each day is an integer from 1 to 365.
Train tickets are sold in 3 different ways:

a 1-day pass is sold for costs[0] dollars;

a 7-day pass is sold for costs[1] dollars;

a 30-day pass is sold for costs[2] dollars.

The passes allow that many days of consecutive travel. For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.

Example 1:

```
Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.
```

### Solution:

```
dp[i] = min(dp[i - 1] + cost of an 1-day pass,
            dp[i - 7] + cost of a 7-day pass,
            dp[i - 30] + cost of a 30-day pass)

```

Optimizations and things to note:

1. For days we don't travel, dp[i] = dp[i-1]

2. To look up whether we travel on a day or not, we can store all the days in a set for easy lookup

[Code](../Minimum-Cost-Ticket/min-cost-ticket.js)
