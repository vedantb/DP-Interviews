# Longest String Chain

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words \[word\_1, word\_2, ..., word\_k\] with k &gt;= 1, where word\_1 is a predecessor of word\_2, word\_2 is a predecessor of word\_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

Example 1:

```text
Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chain is "a","ba","bda","bdca".
```

## Solution

This is a problem where you can use both Longest Increasing Subsequence and Longest Common Subsequence which makes it a great problem!

This problem has the following characteristics :

* We are interested in finding largest subset of the given list or array maintaining the given condition of predecessor relation.

So this problem fits the pattern of problems easily solvable by Longest Increasing Subsequence. In fact we see that once we sort the given string array based string length, this problem translates to finding longest increasing subsequence based on given predecessor condition.

Next big challenge is to figure out a sleek way of determining if a string a is predecessor of string b \(length of string b &gt; length of string a\). Notice that except one character in string b, all other characters in string b would be present in string a and they would be in same order as that in string b. So basically, if we compute the longest common Subsequence of string a and string b, it will be equal to length of string a.

[Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Longest-String-Chain/longest-string-chain.js)

There's another clever way to get the predecessor using a map

[Code using a map](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Notes/Longest-String-Chain/longest-string-chain-2.js)

