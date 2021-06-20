# Target Sum

Given a set of positive numbers \(non zero\) and a target sum ‘S’. Each number should be assigned either a ‘+’ or ‘-’ sign. We need to find out total ways to assign symbols to make the sum of numbers equal to target ‘S’.

Example 1:

```text
Input: {1, 1, 2, 3}, S=1
Output: 3
Explanation: The given set has '3' ways to make a sum of '1': {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}
```

## Solution

This problem follows the 0/1 Knapsack pattern and can be converted into Count of Subset Sum. Let’s dig into this.

We are asked to find two subsets of the given numbers whose difference is equal to the given target ‘S’. Take the first example above. As we saw, one solution is {+1-1-2+3}. So, the two subsets we are asked to find are {1, 3} & {1, 2} because,

```text
(1 + 3) - (1 + 2) = 1
```

Now, let’s say ‘Sum\(s1\)’ denotes the total sum of set ‘s1’, and ‘Sum\(s2\)’ denotes the total sum of set ‘s2’. So the required equation is:

```text
Sum(s1) - Sum(s2) = S
```

This equation can be reduced to the subset sum problem. Let’s assume that ‘Sum\(num\)’ denotes the total sum of all the numbers, therefore:

```text
Sum(s1) + Sum(s2) = Sum(num)
```

Let’s add the above two equations:

```text
Sum(s1) - Sum(s2) + Sum(s1) + Sum(s2) = S + Sum(num)
2 * Sum(s1) =  S + Sum(num)
Sum(s1) = (S + Sum(num)) / 2
```

This essentially converts our problem to: “Find count of subsets of the given numbers whose sum is equal to”, `(S + Sum(num)) / 2`

We take the code for count subset sum and extend its solution:

[Target Sum Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Target-Sum/target-sum-dp.js)

[Target Sum Code With Space Optimized Count Subset Sum](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Target-Sum/target-sum-optimized.js)

