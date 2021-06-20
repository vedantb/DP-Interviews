# Minimum Deletions & Insertions To Transform a String into another

Given strings s1 and s2, we need to transform s1 into s2 by deleting and inserting characters. Write a function to calculate the count of the minimum number of deletion and insertion operations.

Example 1:

```text
Input: s1 = "abc"
       s2 = "fbc"
Output: 1 deletion and 1 insertion.
Explanation: We need to delete {'a'} and insert {'f'} to s1 to transform it into s2.
```

Example 2:

```text
Input: s1 = "abdca"
       s2 = "cbda"
Output: 2 deletions and 1 insertion.
Explanation: We need to delete {'a', 'c'} and insert {'c'} to s1 to transform it into s2.
```

## Solution

This problem can easily be converted to the Longest Common Subsequence \(LCS\). If we can find the LCS of the two input strings, we can easily find how many characters we need to insert and delete from s1. Here is how we can do this:

1. Let’s assume len1 is the length of s1 and len2 is the length of s2.
2. Now let’s assume c1 is the length of LCS of the two strings s1 and s2.
3. To transform s1 into s2, we need to delete everything from s1 which is not part of LCS, so minimum deletions we need to perform from s1 =&gt; len1 - c1
4. Similarly, we need to insert everything in s1 which is present in s2 but not part of LCS, so minimum insertions we need to perform in s1 =&gt; len2 - c1

[Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Longest-Common-Subsequence/min-insertions-deletions.js)

The time and space complexity for this is O\(m\*n\), where ‘m’ and ‘n’ are the lengths of the two input strings.

