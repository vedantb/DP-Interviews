# Shortest Common Supersequence

Given two sequences ‘s1’ and ‘s2’, write a method to find the length of the shortest sequence which has ‘s1’ and ‘s2’ as subsequences.

Example 1:

```code
Input: s1: "abcf" s2:"bdcf"
Output: 5
Explanation: The shortest common super-sequence (SCS) is "abdcf".
```

Example 2:

```code
Input: s1: "dynamic" s2:"programming"
Output: 15
Explanation: The SCS is "dynprogrammicng".
```

### Solution

The problem is quite similar to the Longest Common Subsequence.

A basic brute-force solution could be to try all the super-sequences of the given sequences. We can process both of the sequences one character at a time, so at any step, we must choose between:

1. If the sequences have a matching character, we can skip one character from both the sequences and make a recursive call for the remaining lengths to get SCS.

2. If the strings don’t match, we start two new recursive calls by skipping one character separately from each string. The minimum of these two recursive calls will have our answer.

[Recursive Code](../Shortest-Common-Supersequence/scs-recursive.js)

### Bottom-up DP

Directly jumping to bottom up since it's so similar to LCS

[Bottom up Code](../Shortest-Common-Supersequence/scs-bottom-up.js)
