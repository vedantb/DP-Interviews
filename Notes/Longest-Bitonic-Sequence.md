# Longest Bitonic Sequence

Given an array arr[0 … n-1] containing n positive integers, a subsequence of arr[] is called Bitonic if it is first increasing, then decreasing. Write a function that takes an array as argument and returns the length of the longest bitonic subsequence. A sequence, sorted in increasing order is considered Bitonic with the decreasing part as empty. Similarly, decreasing order sequence is considered Bitonic with the increasing part as empty.

### Solution

The first part (where the value of the items increases) of the Bitonic Subsequence is nothing but similar to finding Longest Increasing Subsequence.

Similarly, the second part, where the value of the items decreases, is similar to finding Longest Decreasing Subsequence. Longest Decreasing Subsequence is similar to Longest Increasing Subsequence, but instead of the values of the items increasing, in case of Longest Decreasing Subsequence the value of the items decreases from left to right.

Lets `nums[]` be the given array:

- Create `longestIncreasingSubsequence[]` array based off of `nums[i]` from left to right where `longestIncreasingSubsequence[i]` gives length of longest increasing subsequence ending with `nums[i]`, including.

- Create `longestDecreasingSubsequence[]` array based off of `nums[i]` from right to left where `longestDecreasingSubsequence[i]` gives length of longest decreasing subsequence starting with `nums[i]`.

- For all `i` from `0` to `(n - 1)`, where n = length of nums[] array, return `max(longestIncreasingSubsequence[i] + longestDecreasingSubsequence[i] - 1`
