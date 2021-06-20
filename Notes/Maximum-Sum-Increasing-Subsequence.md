# Maximum Sum Increasing Subsequence

Given a number sequence, find the increasing subsequence with the highest sum. Write a method that returns the highest sum.

Example 1:

```
Input: {4,1,2,6,10,1,12}
Output: 32
Explanation: The increaseing sequence is {4,6,10,12}.
Please note the difference, as the LIS is {1,2,6,10,12} which has a sum of '31'.
```

### Solution

The problem is quite similar to the Longest Increasing Subsequence. The only difference is that, instead of finding the increasing subsequence with the maximum length, we need to find an increasing sequence with the maximum sum.

A basic brute-force solution could be to try all the subsequences of the given array. We can process one number at a time, so we have two options at any step:

1. If the current number is greater than the previous number that we included, we include that number in a running sum and make a recursive call for the remaining array.

2. We can skip the current number to make a recursive call for the remaining array.

The highest sum of any increasing subsequence would be the max value returned by the two recurse calls from the above two options.

[Recursive Code](../Longest-Increasing-Subsequence/maximum-increasing-subsequence-recursive.js)

The time complexity of the above algorithm is exponential O(2^n), where ‘n’ is the lengths of the input array. The space complexity is O(n) for the recursion stack.

### Top-Down DP with memoization

We can use memoization to overcome the overlapping subproblems.

The three changing values for our recursive function are the current index, the previous index, and the sum. An efficient way of storing the results of the subproblems could be a hash-table whose key would be a string (currentIndex + “|” + previousIndex + “|” + sum).

[Top Down Code](../Longest-Increasing-Subsequence/mis-top-down.js)

### Bottom-Up DP

The above algorithm tells us two things:

1. If the number at the current index is bigger than the number at the previous index, we include that number in the sum for an increasing sequence up to the current index.

2. But if there is a maximum sum increasing subsequence (MSIS), without including the number at the current index, we take that.

So we need to find all the increasing subsequences for a number at index i, from all the previous numbers (i.e. numbers till index i-1), to find MSIS.

If i represents the currentIndex and ‘j’ represents the previousIndex, our recursive formula would look like:

```code
if num[i] > num[j] => dp[i] = dp[j] + num[i] if there is no bigger MSIS for 'i'
```

[Bottom Up Code](../Longest-Increasing-Subsequence/mis-bottom-up.js)

The time complexity of the above algorithm is O(n^2) and the space complexity is O(n).
