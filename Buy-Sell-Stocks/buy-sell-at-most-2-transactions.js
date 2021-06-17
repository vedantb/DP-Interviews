let maxProfit2Transactions = function (prices) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;
  let noStock = Array(days)
    .fill(0)
    .map(() => Array(2).fill(0));
  let hasStock = Array(days)
    .fill(0)
    .map(() => Array(2).fill(0));

  // BASE CONDITIONS
  // First Day = 1 transaction
  hasStock[0][0] = -prices[0];
  noStock[0][0] = 0;
  // First Day = 2 transaction
  noStock[0][1] = 0;
  hasStock[0][1] = -prices[0];

  for (let day = 1; day < days; day++) {
    hasStock[day][0] = Math.max(hasStock[day - 1][0], -prices[day]);
    noStock[day][0] = Math.max(noStock[day - 1][0], hasStock[day - 1][0] + prices[day]);
    hasStock[day][1] = Math.max(hasStock[day - 1][1], noStock[day - 1][0] - prices[day]);
    noStock[day][1] = Math.max(noStock[day - 1][1], hasStock[day - 1][1] + prices[day]);
  }

  return noStock[days - 1][1];
};

let maxProfit2TransactionsOptimized = function (prices) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;

  // BASE CONDITIONS
  // First Day = 1 transaction
  let previousDayHasStockValueForFirstTransaction = -prices[0];
  let previousDayNoStockValueForFirstTransaction = 0;
  // First Day = 2 transaction
  let previousDayNoStockValueForSecondTransaction = 0;
  let previousDayHasStockForSecondTransaction = -prices[0];

  let currentDayNoStockValueForFirstTransaction = 0;
  let currentDayHasStockValueForFirstTransaction = 0;
  let currentDayNoStockValueForSecondTransaction = 0;
  let currentDayHasStockValueForSecondTransaction = 0;

  for (let day = 1; day < days; day++) {
    currentDayHasStockValueForFirstTransaction = Math.max(previousDayHasStockValueForFirstTransaction, -prices[day]);
    currentDayNoStockValueForFirstTransaction = Math.max(
      previousDayNoStockValueForFirstTransaction,
      previousDayHasStockValueForFirstTransaction + prices[day]
    );

    currentDayHasStockValueForSecondTransaction = Math.max(
      previousDayHasStockForSecondTransaction,
      previousDayNoStockValueForFirstTransaction - prices[day]
    );

    currentDayNoStockValueForSecondTransaction = Math.max(
      previousDayNoStockValueForSecondTransaction,
      previousDayHasStockForSecondTransaction + prices[day]
    );

    previousDayNoStockValueForFirstTransaction = currentDayNoStockValueForFirstTransaction;
    previousDayHasStockValueForFirstTransaction = currentDayHasStockValueForFirstTransaction;
    previousDayNoStockValueForSecondTransaction = currentDayNoStockValueForSecondTransaction;
    previousDayHasStockForSecondTransaction = currentDayHasStockValueForSecondTransaction;
  }

  return previousDayNoStockValueForSecondTransaction;
};

// ---- PRINT PATH -----
let maxProfit2TransactionsOptimizedPrintPath = function (prices) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;

  // BASE CONDITIONS
  // First Day = 1 transaction
  let previousDayHasStockValueForFirstTransaction = -prices[0];
  let previousDayNoStockValueForFirstTransaction = 0;
  // First Day = 2 transaction
  let previousDayNoStockValueForSecondTransaction = 0;
  let previousDayHasStockForSecondTransaction = -prices[0];

  // -- DATA STRUCTURES TO TRACK OPTIMAL PATH --

  // for ONE TRANSACTION
  // purchaseDaysForOneTransaction[i] gives purchase day that maximized profit day i,
  // i.e, maximized noStock state for day i
  let purchaseDaysForOneTransaction = [];
  // saleDaysForOneTransaction[i] gives stock sale day that maximized profit day i,
  // i.e, maximized noStock state for day i
  let saleDaysForOneTransaction = [];

  // whenever we sell a stock to get it's corresponding purchase day we need to know
  // the purchase day that maximized the hasStock state of previous day
  // so need to keep a data structure to keep purchase date for each day that maximizes
  // hasStock state for that day
  let purchaseDaysForOneTransactionToMaximizeHasStockstate = [];

  purchaseDaysForOneTransaction[0] = 1;
  saleDaysForOneTransaction[0] = 1;
  purchaseDaysForOneTransactionToMaximizeHasStockstate[0] = 1;

  // FOR 2 TRANSACTIONS
  let purchaseDaysForTwoTransactions = []; // purchaseDaysForTwoTransactions[i] gives
  // purchase day that maximized profit day i, i.e, maximized noStock state for day i
  // with two transactions
  let saleDaysForTwoTransactions = []; // saleDaysForOneTransactions[i] gives
  // stock sale day that maximized profit day i, i.e, maximized noStock state for day i
  // with two transactions

  // whenever we sell a stock to get its corresponding purchase day
  // we need to know the purchase day that maximized
  // the hasStock state of previous day
  // so need to keep a data structure to keep purchase date
  // for each day that maximizes hasStock state for that day
  let purchaseDaysForTwoTransactionToMaximizeHasStockstate = [];
  purchaseDaysForTwoTransactionToMaximizeHasStockstate[0] = 1;
  purchaseDaysForTwoTransactions[0] = 1;
  saleDaysForTwoTransactions[0] = 1;

  let currentDayNoStockValueForFirstTransaction = 0;
  let currentDayHasStockValueForFirstTransaction = 0;
  let currentDayNoStockValueForSecondTransaction = 0;
  let currentDayHasStockValueForSecondTransaction = 0;

  for (let day = 1; day < days; day++) {
    currentDayHasStockValueForFirstTransaction = Math.max(previousDayHasStockValueForFirstTransaction, -prices[day]);
    currentDayNoStockValueForFirstTransaction = Math.max(
      previousDayNoStockValueForFirstTransaction,
      previousDayHasStockValueForFirstTransaction + prices[day]
    );

    if (currentDayHasStockValueForFirstTransaction === previousDayHasStockValueForFirstTransaction) {
      purchaseDaysForOneTransactionToMaximizeHasStockstate[day] =
        purchaseDaysForOneTransactionToMaximizeHasStockstate[day - 1];
    } else {
      purchaseDaysForOneTransactionToMaximizeHasStockstate[day] = day + 1;
    }

    if (currentDayNoStockValueForFirstTransaction === previousDayNoStockValueForFirstTransaction) {
      purchaseDaysForOneTransaction[day] = purchaseDaysForOneTransaction[day - 1];
      saleDaysForOneTransaction[day] = saleDaysForOneTransaction[day - 1];
    } else {
      purchaseDaysForOneTransaction[day] = purchaseDaysForOneTransactionToMaximizeHasStockstate[day - 1];
      saleDaysForOneTransaction[day] = day + 1;
    }

    currentDayHasStockValueForSecondTransaction = Math.max(
      previousDayHasStockForSecondTransaction,
      previousDayNoStockValueForFirstTransaction - prices[day]
    );

    currentDayNoStockValueForSecondTransaction = Math.max(
      previousDayNoStockValueForSecondTransaction,
      previousDayHasStockForSecondTransaction + prices[day]
    );

    if (currentDayHasStockValueForSecondTransaction === previousDayNoStockValueForFirstTransaction - prices[day]) {
      purchaseDaysForTwoTransactionToMaximizeHasStockstate[day] = day + 1;
    } else {
      purchaseDaysForTwoTransactionToMaximizeHasStockstate[day] =
        purchaseDaysForTwoTransactionToMaximizeHasStockstate[day - 1];
    }
    if (currentDayNoStockValueForSecondTransaction === previousDayNoStockValueForSecondTransaction) {
      purchaseDaysForTwoTransactions[day] = purchaseDaysForTwoTransactions[day - 1];
      saleDaysForTwoTransactions[day] = saleDaysForTwoTransactions[day - 1];
    } else {
      purchaseDaysForTwoTransactions[day] = purchaseDaysForTwoTransactionToMaximizeHasStockstate[day - 1];
      saleDaysForTwoTransactions[day] = day + 1;
    }

    previousDayNoStockValueForFirstTransaction = currentDayNoStockValueForFirstTransaction;
    previousDayHasStockValueForFirstTransaction = currentDayHasStockValueForFirstTransaction;
    previousDayNoStockValueForSecondTransaction = currentDayNoStockValueForSecondTransaction;
    previousDayHasStockForSecondTransaction = currentDayHasStockValueForSecondTransaction;
  }

  if (saleDaysForTwoTransactions[days - 1] != 1) {
    let res = [];
    res.push(
      `Sold at day ${saleDaysForTwoTransactions[days - 1]}`,
      `Bought at day ${purchaseDaysForTwoTransactions[days - 1]}`
    );
    if (purchaseDaysForTwoTransactions[days - 1] > 1) {
      res.push(
        `Sold at day ${saleDaysForOneTransaction[purchaseDaysForTwoTransactions[days - 1] - 1]}`,
        `Bought at day ${purchaseDaysForOneTransaction[purchaseDaysForTwoTransactions[days - 1] - 2]}`
      );
    }
    console.log(res.reverse().join(" "));
  }
  return previousDayNoStockValueForSecondTransaction;
};

console.log(maxProfit2Transactions([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit2Transactions([1, 2, 3, 4, 5]));
console.log(maxProfit2Transactions([7, 6, 4, 3, 1]));

console.log(maxProfit2TransactionsOptimized([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit2TransactionsOptimized([1, 2, 3, 4, 5]));
console.log(maxProfit2TransactionsOptimized([7, 6, 4, 3, 1]));

console.log(maxProfit2TransactionsOptimizedPrintPath([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit2TransactionsOptimizedPrintPath([1, 2, 3, 4, 5]));
console.log(maxProfit2TransactionsOptimizedPrintPath([7, 6, 4, 3, 1]));
