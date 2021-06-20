# Maximum Ribbon Cut

We are given a ribbon of length ‘n’ and a set of possible ribbon lengths. We need to cut the ribbon into the maximum number of pieces that comply with the above-mentioned possible lengths. Write a method that will return the count of pieces.

Example 1:

```text
n: 5
Ribbon Lengths: {2,3,5}
Output: 2
Explanation: Ribbon pieces will be {2,3}.
```

Example 2:

```text
n: 13
Ribbon Lengths: {3,5,7}
Output: 3
Explanation: Ribbon pieces will be {3,3,7}.
```

## Solution

This problem follows the Unbounded Knapsack pattern and is quite similar to Minimum Coin Change \(MCC\). The only difference is that in MCC, we were asked to find the minimum number of coin changes, whereas, in this problem, we need to find the maximum number of pieces.

A basic brute-force solution could be to try all combinations of the given lengths to select the maximum one that gives the total length of ‘n.’ This is what our algorithm will look like:

```text
for each length 'l'
  create a new set which includes one quantity of length 'l' if it does not exceed 'n', and
     recursively call to process all lengths
  create a new set without length 'l', and recursively call to process the remaining lengths
return the number of pieces from the above two sets with a higher number of pieces
```

The above algorithm’s time complexity is exponential O\(2^\(L+T\)\), where 'L' represents total ribbon lengths, and ‘N’ is the total length that we want to cut. The space complexity will be O\(L+T\).

## Bottom-up DP

Let’s try to populate our array `dp[ribbonLength][total+1]` for every possible ribbon length with a maximum number of pieces.

So for every possible length ‘len’ \(0 &lt;= len &lt;= total\) and for every possible ribbon length index \(0 &lt;= index &lt; ribbonLengths.length\), we have two options:

1. Exclude the ribbon length: In this case, we will take the maximum piece count from the previous set =&gt; `dp[index-1][len]`
2. Include the ribbon length if its value is not more than ‘len’: In this case, we will take the maximum pieces needed to get the remaining total, plus include ‘1’ for the current ribbon length =&gt; 1 + `dp[index][len-ribbonLengths[index]]`

Finally, we will take the maximum of the above two values for our solution:

`dp[index][len] = max(dp[index-1][len], 1 + dp[index][len-ribbonLengths[index]])`

**Code:**

[Bottom up Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Max-Ribbon-Cut/max-ribbon-cut-bottom-up.js)

## Space-Optimized

[Space Optimized COde](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Max-Ribbon-Cut/max-ribbon-cut-optimized.js)

