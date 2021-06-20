# Longest Palindromic Substring

Given a string, find the length of its Longest Palindromic Substring (LPS). In a palindromic string, elements read the same backward and forward.

Example 1:

```
Input: "abdbca"
Output: 3
Explanation: LPS is "bdb".
```

Example 2:

```
Input: = "cddpd"
Output: 3
Explanation: LPS is "dpd".
```

### Solution

This problem follows the Longest Palindromic Subsequence pattern. The only difference is that in a palindromic subsequence characters can be non-adjacent, whereas in a substring all characters should form a palindrome. We will follow a similar approach though.

The brute-force solution will be to try all the substrings of the given string. We can start processing from the beginning and the end of the string. So at any step, we will have two options:

1. If the element at the beginning and the end are the same, we make a recursive call to check if the remaining string is a palindrome. If so, the string is a palindrome from beginning to end.

2. We will skip either the element from the beginning or the end and make two recursive calls for the remaining substring. The length of LPS will be the maximum of these two recursive calls.

[Recursive Code](../Longest-Palindromic-Substring/lps-recursive.js)

Due to the three recursive calls, the time complexity of the above algorithm is exponential O(3^n), where 'n' is the length of the input string. The space complexity is O(n) used for the recursion stack.

### Top-Down DP with Memoization

We can use an array to store the already solved subproblems.

The two changing values to our recursive function are the two indexes, startIndex and endIndex. Therefore, we can store the results of all the subproblems in a two-dimensional array. (Another alternative could be to use a hash-table whose key would be a string (startIndex + “|” + endIndex))

[Top Down Code](../Longest-Palindromic-Substring/lps-topdown.js)

The above algorithm has a time and space complexity of O(n^2) because we will not have more than n\*n subproblems.

### Bottom-up DP

Since we want to try all the substrings of the given string, we can use a two-dimensional array to store the subproblems’ results. So `dp[i][j]` will be ‘true’ if the substring from index ‘i’ to index ‘j’ is a palindrome.

We can start from the beginning of the string and keep adding one element at a time. At every step, we will try all of its substrings. So for every `endIndex` and `startIndex` in the given string, we need to check the following thing:

If the element at the `startIndex` matches the element at the `endIndex`, we will further check if the remaining substring (from `startIndex+1` to `endIndex-1`) is a substring too.

Recursive Formula:

```
if st[startIndex] == st[endIndex], and
    if the remaing string is of zero length or dp[startIndex+1][endIndex-1] is a palindrome then
        dp[startIndex][endIndex] = true
```

[Code](../Longest-Palindromic-Substring/lps-bottom-up.js)

The time and space complexity of this algorithm is O(n^2).

## NON-DP O(n) space approach

For every letter in the string, we compute whether the letter is the center of a palindromic substring and get the length. For every letter we need to computer 2 cases, whether just the letter at index i is the center or i and i+1 is the center.

[Expanding Around Center Code](../Longest-Palindromic-Substring/lps-non-dp.js)
