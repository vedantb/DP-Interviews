# Minimum Coin Change

Given an infinite supply of ‘n’ coin denominations and a total money amount, we are asked to find the minimum number of coins needed to make up that amount.

Example 1:

```
Denominations: {1,2,3}
Total amount: 5
Output: 2
Explanation: We need a minimum of two coins {2,3} to make a total of '5'
```

### Solution

This problem follows the Unbounded Knapsack pattern.

A basic brute-force solution could be to try all combinations of the given coins to select the ones that give a total sum of ‘T’. This is what our algorithm will look like:

```code
for each coin 'c'
  create a new set which includes one quantity of coin 'c' if it does not exceed 'T', and
     recursively call to process all coins
  create a new set without coin 'c', and recursively call to process the remaining coins
return the count of coins from the above two sets with a smaller number of coins
```

**Code:**

[Recursive Code](../Minimum-Coin-Change/min-coin-change-recursive.js)

### Top-Down Dynamic Programming With Memoization

We can use memoization to overcome the overlapping sub-problems. We will be using a two-dimensional array to store the results of solved sub-problems.

[Top Down Code](../Minimum-Coin-Change/min-coin-change-top-down.js)

### Bottom-Up Dynamic Programming

Let’s try to populate our array `dp[totalDenominations][total+1]` for every possible total with a minimum number of coins needed.

So for every possible total ‘t’ (0<= t <= Total) and for every possible coin index (0 <= index < denominations.length), we have two options:

1. Exclude the coin: In this case, we will take the minimum coin count from the previous set => `dp[index-1][t]`

2. Include the coin if its value is not more than ‘t’: In this case, we will take the minimum count needed to get the remaining total, plus include ‘1’ for the current coin => `dp[index][t-denominations[index]] + 1`

Finally, we will take the minimum of the above two values for our solution:

`dp[index][t] = min(dp[index-1][t], dp[index]t-denominations[index]] + 1)`

**Code:**

[Bottom Up Code](../Minimum-Coin-Change/min-coin-change-bottom-up.js)

### Bottom Up With Space Optimization

[Space Optimized Code](../Minimum-Coin-Change/min-coin-change-optimized.js)
