# All Possible Cuts In All Possible Intervals For Choosing Last Operation

Problems belonging to this category would have problem statement something like below or some variation of it:

```text
Given a set of numbers find an optimal solution for a problem considering the current number and the best you can get from the left and right sides.
```

## Solution:

Make "cuts" at all possible places \(each CUT will create two INTERVALS on both sides, one on each side\) and return the result for that cut that gives the most optimal result. **Now the biggest question is: what will each of these CUTS represent ?** Each of these "cuts" will represent the **last operation done in the interval that is getting divided by two by the "cut"**. And this will come naturally to you when you see all the examples we discuss in next several problems.

In matrix multiplication, the first "cut" will represent dividing the whole set of matrices into two sets and then multiplying the two sets of matrices. So, this multiplication will be the last multiplication done, because by that time both the two sets of matrices will already have the multiplication ready.

Also, as we will see later while solving problems, **FIGURING OUT WHAT THESE CUTS DEFINE IS THE MOST CHALLENGING PART OF SOLVING THIS KIND OF DP PROBLEMS**.

### Template

```javascript
// from i to j
dp[i][j] = dp[i][k] + result[k] + dp[k + 1][j];
// Get the best from left and right sides and add a solution for the current position

for (let l = 1; l < n; l++) {
  for (let i = 0; i < n - l; i++) {
    let j = i + l;
    for (let k = i; k < j; k++) {
      dp[i][j] = max(dp[i][j], dp[i][k] + result[k] + dp[k + 1][j]);
    }
  }
}

return dp[0][n - 1];
```

