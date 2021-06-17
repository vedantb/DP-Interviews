const maxProfitKTransactions = function (k, prices) {
  if (k === 0 || !prices || prices.length < 2) return 0;
  let days = prices.length;

  if (k > days) {
    // If we are allowed to make more transactions than the total number of days
    // and the goal is still maximizing the profit then the problem becomes similar
    // to finding the max profit when you can make as many transactions as possible
    // with NO overlapping transactions. This is similar to the unlimited transactions
    // problem and we can reuse that
    return allTimeProfits(prices);
  }

  // we are accounting for 0th transaction as well, so transaction size = [0...k]
  let noStock = Array(days)
    .fill(0)
    .map(() => Array(k + 1).fill(0));

  let hasStock = Array(days)
    .fill(0)
    .map(() => Array(k + 1).fill(0));

  // BASE CASES
  for (let transaction = 1; transaction <= k; transaction++) {
    hasStock[0][transaction] = -prices[0];
    noStock[0][transaction] = 0;
  }

  for (let day = 1; day < days; day++) {
    // This only applies for transaction #1
    noStock[day][1] = Math.max(noStock[day - 1][1], hasStock[day - 1][1] + prices[day]);
    hasStock[day][1] = Math.max(hasStock[day - 1][1], -prices[day]);

    for (let transaction = 2; transaction <= k; transaction++) {
      noStock[day][transaction] = Math.max(noStock[day - 1][transaction], hasStock[day - 1][transaction] + prices[day]);
      hasStock[day][transaction] = Math.max(
        hasStock[day - 1][transaction],
        noStock[day - 1][transaction - 1] - prices[day]
      );
    }
  }
  return noStock[days - 1][k];
};

// SPACE OPTIMIZATION
const maxProfitKTransactionsOptimized = function (k, prices) {
  if (k === 0 || !prices || prices.length < 2) return 0;
  let days = prices.length;
  if (k > days) return allTimeProfits(prices);

  let previousDayNoStockValues = [];
  let previousDayHasStockValues = [];
  for (let transaction = 0; transaction <= k; transaction++) {
    previousDayHasStockValues[transaction] = -prices[0];
    previousDayNoStockValues[transaction] = 0;
  }

  let currentDayNoStockValues = [];
  let currentDayHasStockValues = [];

  for (let day = 1; day < days; day++) {
    currentDayNoStockValues[0] = Math.max(previousDayNoStockValues[0], previousDayHasStockValues[0] + prices[day]);
    currentDayHasStockValues[0] = Math.max(previousDayHasStockValues[0], -prices[day]);

    for (let transaction = 1; transaction < k; transaction++) {
      currentDayNoStockValues[transaction] = Math.max(
        previousDayNoStockValues[transaction],
        previousDayHasStockValues[transaction] + prices[day]
      );
      currentDayHasStockValues[transaction] = Math.max(
        previousDayHasStockValues[transaction],
        previousDayNoStockValues[transaction - 1] - prices[day]
      );
    }

    for (let transaction = 0; transaction < k; transaction++) {
      previousDayNoStockValues[transaction] = currentDayNoStockValues[transaction];
      previousDayHasStockValues[transaction] = currentDayHasStockValues[transaction];
    }
  }
  return previousDayNoStockValues[k - 1];
};

// --- TRACKING OPTIMAL PATH ---
const maxProfitKTransactionsOptimizedWithPath = function (k, prices) {
  if (k === 0 || !prices || prices.length < 2) return 0;
  let days = prices.length;
  if (k > days) return allTimeProfits(prices);

  let previousDayNoStockValues = [];
  let previousDayHasStockValues = [];
  for (let transaction = 0; transaction <= k; transaction++) {
    previousDayHasStockValues[transaction] = -prices[0];
    previousDayNoStockValues[transaction] = 0;
  }

  // next 3 variables to track the optimal path
  // purchaseDays[i][j] = day the last stock was purchase in order to maximize profit of day i for transaction# j
  let purchaseDays = Array(days)
    .fill(0)
    .map(() => Array(k).fill(0));
  // sellingDays[i][j] = day the last stock was sold in order to maximize profit of day i for transaction# j
  let sellingDays = Array(days)
    .fill(0)
    .map(() => Array(k).fill(0));
  let purchaseDayForLastSockToMaximizeHasStockState = Array(days)
    .fill(0)
    .map(() => Array(k).fill(0));

  let currentDayNoStockValues = [];
  let currentDayHasStockValues = [];

  for (let day = 1; day < days; day++) {
    for (let transaction = 0; transaction < k; transaction++) {
      currentDayNoStockValues[transaction] = Math.max(
        previousDayNoStockValues[transaction],
        previousDayHasStockValues[transaction] + prices[day]
      );
      let hasStockValueWhenTransitionedFromNoStockState =
        transaction === 0 ? -prices[day] : previousDayNoStockValues[transaction - 1] - prices[day];
      currentDayHasStockValues[transaction] = Math.max(
        previousDayHasStockValues[transaction],
        hasStockValueWhenTransitionedFromNoStockState
      );

      // Tracking Optimal Path
      if (currentDayHasStockValues[transaction] === hasStockValueWhenTransitionedFromNoStockState) {
        // this means that we transitioned so today is purchase day
        purchaseDayForLastSockToMaximizeHasStockState[day][transaction] = day;
      } else {
        purchaseDayForLastSockToMaximizeHasStockState[day][transaction] =
          purchaseDayForLastSockToMaximizeHasStockState[day - 1][transaction];
      }

      if (currentDayNoStockValues[transaction] === previousDayHasStockValues[transaction] + prices[day]) {
        purchaseDays[day][transaction] = purchaseDayForLastSockToMaximizeHasStockState[day - 1][transaction];
        sellingDays[day][transaction] = day;
      } else {
        purchaseDays[day][transaction] = purchaseDays[day - 1][transaction];
        sellingDays[day][transaction] = sellingDays[day - 1][transaction];
      }
    }

    for (let transaction = 0; transaction < k; transaction++) {
      previousDayNoStockValues[transaction] = currentDayNoStockValues[transaction];
      previousDayHasStockValues[transaction] = currentDayHasStockValues[transaction];
    }
  }

  let result = [];
  let day = days - 1;
  if (sellingDays[day][k - 1] !== 0) {
    for (let transaction = k - 1; transaction >= 0; transaction--) {
      result.push(`Sold on ${sellingDays[day][transaction] + 1} `);
      result.push(`Bought on ${purchaseDays[day][transaction] + 1} `);
      day = purchaseDays[day][transaction] - 1;
      if (day <= 0) break;
    }
  }
  console.log(result.reverse().join(" "));
  return previousDayNoStockValues[k - 1];
};

function allTimeProfits(prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;
  let noStock = [0];
  let hasStock = [-prices[0]];
  for (let day = 1; day < days; day++) {
    noStock[day] = Math.max(noStock[day - 1], hasStock[day - 1] + prices[day]);
    hasStock[day] = Math.max(hasStock[day - 1], noStock[day - 1] - prices[day]);
  }
  return noStock[days - 1];
}

console.log(maxProfitKTransactions(2, [3, 2, 6, 5, 0, 3]));
console.log(maxProfitKTransactions(2, [2, 4, 1]));

console.log(maxProfitKTransactionsOptimized(2, [3, 2, 6, 5, 0, 3]));
console.log(maxProfitKTransactionsOptimized(2, [2, 4, 1]));

console.log(maxProfitKTransactionsOptimizedWithPath(2, [3, 2, 6, 5, 0, 3]));
console.log(maxProfitKTransactionsOptimizedWithPath(2, [2, 4, 1]));
