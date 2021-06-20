# Rod Cutting

Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces in a way that will maximize the profit. We are also given the price of every piece of length ‘i’ where ‘1 &lt;= i &lt;= n’.

Example:

Lengths: \[1, 2, 3, 4, 5\]

Prices: \[2, 6, 7, 10, 13\]

Rod Length: 5

Let’s try different combinations of cutting the rod:

Five pieces of length 1 =&gt; 10 price

Two pieces of length 2 and one piece of length 1 =&gt; 14 price

One piece of length 3 and two pieces of length 1 =&gt; 11 price

One piece of length 3 and one piece of length 2 =&gt; 13 price

One piece of length 4 and one piece of length 1 =&gt; 12 price

One piece of length 5 =&gt; 13 price

This shows that we get the maximum price \(14\) by cutting the rod into two pieces of length ‘2’ and one piece of length ‘1’.

## Solution

This is the same problem as the unbounded knapsack just worded differently.

From the unbounded knapsack problem,

rod length = capacity

prices = profits

lengths = weights

We can reuse the same solution.

[Optimzed Space Solution](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Rod-Cutting/rod-cutting-optimized.js)

