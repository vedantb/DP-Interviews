# Russian Doll

You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one evelope is greather than the width and height of the other envelope.
What is the maximum number of envelopes you can Russian doll (put into one another)?
**Rotation isn't allowed**

Example1:

```
Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The max number of envelopes you can russian doll is 3 -> [2,3]=>[5,4]=>[6,7]
```

### Solution

Recall from Longest Increasing Subsequence notes that most problems where you are given an array (or list) of items and you'd have to find the largest subset of the items which maintains certain given condition could be solved using Longest Increasing Subsequence technique.

This problem has striking similarity with Box Stacking, and just like Box Stacking this problem is also a great use case for Longest Increasing Subsequence concept.

The problem statement says one envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

This means is envelope E1 can fit into envelope E2 then:

- width of E2 > width of envelope E1
- height of E2 > height of E1

From above relations we get:
(width of E2 \* height of E2) > (width of E1 \* height of E1)
OR Area(E2) > Area(E1)

Once we sort all the envelopes in ascending order of their surface area, the Longest Increasing Subsequence of the sorted envelopes will give the maximum number of envelopes that can be Russian dolled.

This is often seen as a hard problem but becomes really easy once you realize that it fits into the Longest Increasing Subsequence concept.

[DP Code](../Russian-Doll/russian-doll.js)

[DP O(nlogn) using patience sort](../Russian-Doll/russian-doll-patience-sort.js)
