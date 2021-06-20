# Buy & Sell Stock

## Maximum Profit With At Most K Stock Trading Transactions

**Problem Statement**:

Say you have an array for which the i-th element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete at most k transactions. You may not engage in multiple transactions at the same time \(ie, you must sell the stock before you buy again\).

Example 1:

```text
Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

Example 2:

```text
Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

**Solution:**

In the given problem, 0 to maximum of K transactions are allowed. A transaction consists of first buying a stock and then selling it. Our goal is to maximize profit. We would make zero transaction to maximize profit when the prices of the stock are in non-increasing order, for example, \[10, 10, 9, 6, 5, 5, 4, 1\].

Right after reading the problem statement, the thing that strikes the mind is that there are **two states involved in this problem**.

**\(1\) Either we buy a stock and hold a stock. Let's call this state hasStock. Or, \(2\) we sell the purchased stock and end up with no stock. Let's call this state noStock state. With every state day and transaction\# are associated \(state for which day and how many transactions made till then\).**

The START state is always noStock state on first day with transaction\# = 0. From the START state we have 2 options:

* do nothing and be in the same noStock state
* buy a stock and transition to hasStock state with transaction \#1. The associated day will be the day on which we buy the stock.

Once we buy the first stock we again have two options:

* do nothing and be in same hasStock state.
* sell the stock and transition to noStock state **as part of the same transaction**. The associated day will be the day on which we sell the stock.

The above whole observation is very important as this will help us in extrapolating the transition behavior for all K transactions and for all days, and eventually will help us coming up with the **state machine diagram**.

If we think through end-to-end now, below would be our observation:

* For every transaction, the transaction starts with buying a stock i.e, hasStock state, and from there we can transition to noStock state by selling the stock we bought as part of this transaction.
* For a specific transaction there is no way we can transition to hasStock state from noStock state, because buying a stock would take us to next transition.
* Which means, we can transition to hasStock state for transaction\# i from noStock state for transaction\# \(i - 1\).
* This is not true only for transaction\# 0, since in transaction\# 0 we only have one state and that is noStock state and this state persists till we buy our first stock.

