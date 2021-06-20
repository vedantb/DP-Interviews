# Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '\*' where:

'?' Matches any single character.
'\*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

Example 2:

```
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
```

Example 3:

```
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```

Example 4:

```
Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
```

## Solution

This is really similar to [Regular Expression Matching](./Regular-Expression-Matching.md)

For the DP table

1. If the wildchard character is a '?', you just check `n-1` and `m-1` since ? matches with any character.

   `dp[n][m] = dp[n-1][m-1]`

2. If the wildcard character is '\*'.

   a. **Zero Occurrences of a character:** If the current string matches the pattern till `m-1` and there are 0 occurrences of any character for '\*', it also matches till 'm'.

   `dp[n][m] = dp[n][m-1]`

   b. **Non-Zero Occurrences of a character:** `str[0...(i)]` will match `wildcard[0...(j)]` if `str[0...(i - 1)]` has matched `wildcard[0...(j)]`.

   `dp[n][m] = dp[n-1][m]`

3. If the wildcard character is neither '?' or '\*':

   If the string and wildcards have matched till now and if the characters at the current indexes match, we have a match.

   `dp[n][m] = dp[n-1][m-1] && strChar === wildcardChar`

## Code:

[Wildcard Matching Code](../Advanced-String-DP/wildcard-matching.js)

## METHOD 2: BACKTRACKING

This is an intuitive technique where we only worry about "\*" in the pattern. We have indexes for both the str and the pattern. We keep on matching and incremeneting both indexes.

If the pattern character is a "\*". We save the current pattern and string indexes in temp variables. and the proceed with the loop assuming there are 0 occurrences for "\*".

e.g. for str="abc" and pattern="a\*c", when index is 1 for both str and pattern, we will first assume 0 occurrences for the \* and just increment the pattern pointer and continue matching.

If there's a mismatch, we come back to the temp variables and assume 1 occurrence now.

![Wildcard Matching Backtracking](https://leetcode.com/problems/wildcard-matching/Figures/44/backtrack.png)

## Code:

The code is well commented:

[Wildcard Matching Backtracking Code](../Advanced-String-DP/wildcard-matching-backtracking.js)
