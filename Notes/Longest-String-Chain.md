# Longest String Chain

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

Example 1:

```
Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chain is "a","ba","bda","bdca".
```

### Solution

This is a problem where you can use both Longest Increasing Subsequence and Longest Common Subsequence which makes it a great problem!

This problem has the following characteristics :

- We are interested in finding largest subset of the given list or array maintaining the given condition of predecessor relation.

So this problem fits the pattern of problems easily solvable by Longest Increasing Subsequence.
In fact we see that once we sort the given string array based string length, this problem translates to finding longest increasing subsequence based on given predecessor condition.

Next big challenge is to figure out a sleek way of determining if a string a is predecessor of string b (length of string b > length of string a). Notice that except one character in string b, all other characters in string b would be present in string a and they would be in same order as that in string b. So basically, if we compute the longest common Subsequence of string a and string b, it will be equal to length of string a.
