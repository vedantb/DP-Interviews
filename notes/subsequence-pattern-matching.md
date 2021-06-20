# Subsequence Pattern Matching

Given a string and a pattern, write a method to count the number of times the pattern appears in the string as a subsequence.

Example 1:

```text
Example 1: Input: string: “baxmx”, pattern: “ax”
Output: 2
Explanation: {b"ax"mx, b"a"xm"x"}.
```

## Solution

This problem follows the Longest Common Subsequence \(LCS\) pattern and is quite similar to the Longest Repeating Subsequence; the difference is that we need to count the total occurrences of the subsequence.

A basic brute-force solution could be to try all the subsequences of the given string to count all that match the given pattern. We can match the pattern with the given string one character at a time, so we can do two things at any step:

1. If the pattern has a matching character with the string, we can recursively match for the remaining lengths of the pattern and the string.
2. At every step, we can always skip a character from the string to try to match the remaining string with the pattern. So we can start a recursive call by skipping one character from the string.

Our total count will be the sum of the counts returned by the above two options.

[Recursive Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Subsequence-Pattern-Matching/spm-recursive.js)

## Top-Down DP with Memoization

We can use an array to store the already solved subproblems.

The two changing values to our recursive function are the two indexes strIndex and patIndex. Therefore, we can store the results of all the subproblems in a two-dimensional array. \(Another alternative could be to use a hash-table whose key would be a string \(strIndex + “\|” + patIndex\)\).

[Top Down Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Subsequence-Pattern-Matching/spm-topdown.js)

## Bottom-up DP

Since we want to match all the subsequences of the given string, we can use a two-dimensional array to store our results. As mentioned above, we will be tracking separate indexes for the string and the pattern, so we will be doing two things for every value of `strIndex` and `patIndex`:

1. If the character at the `strIndex` \(in the string\) matches the character at `patIndex` \(in the pattern\), the count of the SPM would be equal to the count of SPM up to `strIndex-1` and `patIndex-1`.
2. At every step, we can always skip a character from the string to try matching the remaining string with the pattern; therefore, we can add the SPM count from the indexes `strIndex-1` and `patIndex`.

Recursive Formula:

```text
if str[strIndex] == pat[patIndex] {
  dp[strIndex][patIndex] = dp[strIndex-1][patIndex-1]
}
dp[strIndex][patIndex] += dp[strIndex-1][patIndex]
```

[Bottom up DP Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Subsequence-Pattern-Matching/spm-bottomup.js)

The time and space complexity of the above algorithm is O\(m\*n\), where ‘m’ and ‘n’ are the lengths of the string and the pattern respectively.

