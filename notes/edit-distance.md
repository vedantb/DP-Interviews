# Edit Distance

Given strings s1 and s2, we need to transform s1 into s2 by deleting, inserting, or replacing characters. Write a function to calculate the count of the minimum number of edit operations.

Example 1:

```text
Input: s1 = "bat"
       s2 = "but"
Output: 1
Explanation: We just need to replace 'a' with 'u' to transform s1 to s2.
```

Example 2:

```text
Input: s1 = "abdca"
       s2 = "cbda"
Output: 2
Explanation: We can replace first 'a' with 'c' and delete second 'c'.
```

## Solution

A basic brute-force solution could be to try all operations \(one by one\) on each character of s1. We can iterate through s1 and s2 together. Let’s assume index1 and index2 point to the current indexes of s1 and s2 respectively, so we have two options at every step:

1. If the strings have a matching character, we can recursively match for the remaining lengths.
2. If the strings don’t match, we start three new recursive calls representing the three edit operations. Whichever recursive call returns the minimum count of operations will be our answer.

[Recursive Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Edit-Distance/edit-distance-recursive.js)

Because of the three recursive calls, the time complexity of the above algorithm is exponential O\(3^\(n+m\)\), where ‘m’ and ‘n’ are the lengths of the two input strings. The space complexity is O\(n+m\) which is used to store the recursion stack.

## Top-Down DP With Memoization

We can use an array to store the already solved subproblems.

The two changing values in our recursive function are the two indexes, i1 and i2. Therefore, we can store the results of all the subproblems in a two-dimensional array. \(Another alternative could be to use a hash-table whose key would be a string \(i1 + “\|” + i2\)\).

[Top Down Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Edit-Distance/edit-distance-top-down.js)

**What is the time and space complexity of the above solution?**

Since our memoization array `dp[s1.length][s2.length]` stores the results for all the subproblems, we can conclude that we will not have more than m\*n subproblems \(where ‘m’ and ‘n’ are the lengths of the two input strings.\). This means that our time and space complexity will be O\(m\*n\).

## Bottom-up DP

Since we want to match all the characters of the given two strings, we can use a two-dimensional array to store our results. The lengths of the two strings will define the size of the two dimensions of the array. So for every index ‘i1’ in string ‘s1’ and ‘i2’ in string ‘s2’, we will choose one of the following options:

1. If the character `s1[i1`\] matches `s2[i2]`, the count of the edit operations will be equal to the count of the edit operations for the remaining strings.
2. If the character `s1[i1]` does not match `s2[i2]`, we will take the minimum count from the remaining strings after performing any of the three edit operations.

So, our recursive formula will be:

```text
if s1[i1] == s2[i2]
  dp[i1][i2] = dp[i1-1][i2-1]
else
  dp[i1][i2] = 1 + min(dp[i1-1][i2], // delete
                       dp[i1][i2-1], // insert
                       dp[i1-1][i2-1]) // replace
```

[Bottom Up Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Edit-Distance/edit-distance-bottom-up.js)

