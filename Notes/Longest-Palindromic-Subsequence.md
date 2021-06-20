# Longest Palindromic Subsequence

Given a sequence, find the length of its Longest Palindromic Subsequence (LPS). In a palindromic subsequence, elements read the same backward and forward.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements

Example 1:

```
Input: "abdbca"
Output: 5
Explanation: LPS is "abdba".
```

Example 2:

```
Input: = "cddpd"
Output: 3
Explanation: LPS is "ddd".
```

### Solution

A basic brute-force solution could be to try all the subsequences of the given sequence. We can start processing from the beginning and the end of the sequence. So at any step, we have two options:

1. If the element at the beginning and the end are the same, we increment our count by two and make a recursive call for the remaining sequence.

2. We will skip the element either from the beginning or the end to make two recursive calls for the remaining subsequence.

If option one applies then it will give us the length of LPS; otherwise, the length of LPS will be the maximum number returned by the two recurse calls from the second option.

[Recursive Code](../Longest-Palindromic-Subsequence/lps-recursive.js)

In each function call, we are either having one recursive call or two recursive calls; hence, the time complexity of the above algorithm is exponential O(2^n), where 'n' is the length of input string. The space complexity is O(n), used to store the recursion stack.

## Top-Down DP with Memoization

We can use an array to store the already solved subproblems.

The two changing values to our recursive function are the two indexes, startIndex and endIndex. Therefore, we can store the results of all the subproblems in a two-dimensional array. (Another alternative could be to use a hash-table whose key would be a string (startIndex + “|” + endIndex))

[Top Down Code](../Longest-Palindromic-Subsequence/lps-top-down.js)

**What is the time and space complexity of the above solution?**

Since our memoization array `dp[st.length()][st.length()]` stores the results for all the subproblems, we can conclude that we will not have more than N\*N subproblems (where ‘N’ is the length of the input sequence). This means that our time complexity will be O(N^2).

The above algorithm will be using O(N^2) space for the memoization array. Other than that we will use O(N) space for the recursion call-stack. So the total space complexity will be O(N^2 + N), which is asymptotically equivalent to O(N^2).

## Bottom-Up DP

Since we want to try all the subsequences of the given sequence, we can use a two-dimensional array to store our results. We can start from the beginning of the sequence and keep adding one element at a time. At every step, we will try all of its subsequences. So for every `startIndex` and `endIndex` in the given string, we will choose one of the following two options:

1. If the element at the `startIndex` matches the element at the `endIndex`, the length of LPS would be two plus the length of LPS till `startIndex+1` and `endIndex-1`.

2. If the element at the `startIndex` does not match the element at the `endIndex`, we will take the maximum LPS created by either skipping element at the `startIndex` or the `endIndex`.

so, our recursive formula:

```
if st[endIndex] == st[startIndex]
  dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1]
else
  dp[startIndex][endIndex] = Math.max(dp[startIndex + 1][endIndex], dp[startIndex][endIndex - 1])
```

[Code](../Longest-Palindromic-Subsequence/lps-bottom-up.js)

The time and space complexity of the above algorithm is O(n^2)
