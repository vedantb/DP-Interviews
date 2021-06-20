# Regular Expression Matching

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '\*' where:

`'.'` Matches any single character.

`'*'` Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

Example 2:

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

Example 3:

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (\*) of any character (.)".
```

Example 4:

```
Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

## Solution

Let's jump towards thinking about the recurrence relations we can form for our bottom up DP approach.

Lets's assume the given string is `str[0....n]` and given regular expression is `regexp[0...m]`, and let's assume `dp[i][j]` gives result for `str[0...i]` and `regexp[0...j]`.

- What happens if character at regexp[m] is '.' ?

'.' matches one single character. It does not care about what the character is. `str[0...n]` will match `regexp[0...m]` as long as `str[0...(n - 1)]` has already matched `regexp[0...(m - 1)]`. For example: "hackathon" will match regular expression say "hackatho." as long long as "hackatho" has matched with regular expression "hackatho".

This leads us to

`dp[n][m] = dp[n-1][m-1]`

- What happens when character at regexp[m] is '\*' ?

  '\*' matches zero or more of the preceding character.

  Now what this preceding character might be ? Anything including '.'

  '.\*' is different from all other characters as preceding character since '.' represents any character.

  What I mean by this is: "a\*" will be match "", "a", "aa", "aaa" and so on. Observe that how 'a' is fixed here, no other characters allowed since preceding character is 'a'.

  This is not the case if preceding character is '.'. Since '.' represents any character, ".\*" will match "", "a", "z", "hedhrekjfhkerjhfrekjfhrekjhfrkj" etc. Observe that we are not bound to repeat the same character since '.' represents any character.

So let's handle this case by dividing it into two scenarios:

1. Zero Occurrence of preceding character:

   If character at index m in regular expression is '\*', and the preceding character has not occurred even once in the given string then whether the string `str[0...n]` matches `regexp[0...m]`or not depends on whether `str[0...n]` has matched `regexp[0...(m - 2)]` since `regexp[m - 1] = preceding character` and `regexp[m] = '\*'`.

   This leads us to the recurrence relation:

`dp[n][m] = dp[n][m-2] && regexp[m] === '*'`

2. One or More Occurrences of preceding character:

   `str[0...n]` will match `regexp[0...m]` as long as `str[0...(n - 1)]` has matched `regexp[0...m]`.

   This leads us to the recurrence relation:

   `dp[n][m] = dp[n - 1][m] && regexp[m - 1] == str[n]`

   Here the special case is: when character at `regexp[m - 1]` is '.'

   We would still get a very similar recurrence relation as above, but since '.' represents any character, instead of checking for whether `regexp[m - 1] == str[n]`, we would be checking for whether `regexp[m - 1] == '.'`

   This leads us to the recurrence relation:

   `dp[n][m] = dp[n - 1][m] && regexp[m - 1] == '.'`

3. What happens when character at `regexp[m]` is neither '.' nor '\*' ?

   Say regexp[m] is 'a' or 'y' or '7' or any character but not '.' or '\*'.

   In this case, we need to check:

   - whether `str[n] == regexp[m]`
   - whether `str[0...(n - 1)]` matches `regexp[0..(m - 1)]`

   So, the recurrence relation is:

   `dp[n][m] = dp[n - 1][m - 1] && str[n] == regexp[m]`

DP Table Initializations:

- `dp[0][0]` is always true since empty string matches empty regular expression.
- If regular expression is empty and given string is non-empty, we would always get false, since they don't match.
  So, `dp[i][0]` is always false if `i != 0`.
- If regular expression is non-empty and string is empty, then they would match only if regular expression is of the form "a\*" or "a\*b\*" and so on, since '\*' represent zero or more occurrences.
  If regular expression contains '.', the the regular expression cannot match an empty string, since '.' represents one occurrence of any character.

### Code:

[Regule Expression Matching Code](../Advanced-String-DP/regular-expression-matching.js)
