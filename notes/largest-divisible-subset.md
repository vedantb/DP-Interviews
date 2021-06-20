# Largest Divisible Subset

Given a set of distinct positive integers, find the largest subset such that every pair \(Si, Sj\) of elements in this subset satisfies: **Si % Sj = 0 or Sj % Si = 0.** If there are multiple solutions, returning any subset is fine.

Example 1:

```text
Input: [1,2,3]
Output: [1,2] or [1,3]
```

## Solution

The below two observations would help us to come up with our algorithm to solve this problem:

Given a list of values \[E, F, G\] sorted in ascending order \(i.e. E &lt; F &lt; G\), and the list itself forms a divisible subset as described in the problem, then we could extend the subset without enumerating all numbers in the subset, in the following two cases:

1. For any value that can be divided by the largest element in the divisible subset, by adding the new value into the subset, one can form another divisible subset, i.e. for all h, if h % G == 0, then \[E, F, G, h\] forms a new divisible subset. Example: \[2, 4, 8\] is a divisible list. Now 40 % 8 = 0, and the list \[2, 4, 8, 40\] is also divisible.
2. For all value that can divide the smallest element in the subset, by adding the new value into the subset, one can form another divisible subset, i.e. for all d, if E % d == 0, then \[d, E, F, G\] forms a new divisible subset. Example: \[4, 8, 16\] is a divisible list. Now 2 % 4 = 0, and the list \[2, 4, 8, 16\] is also divisible.

We sort the given integer array in ascending sort. Now the Longest Increasing Subsequence of the sorted array maintaining the given divisibility condition would give us the largest divisible subset, as shown in the code.

[Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Largest-Divisible-Subset/largest-divisible-subset.js)

