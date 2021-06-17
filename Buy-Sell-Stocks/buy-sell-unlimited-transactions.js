let maxProfitUnlimitedTransactions = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;
  let noStock = [0];
  let hasStock = [-prices[0]];
  for (let day = 1; day < days; day++) {
    noStock[day] = Math.max(noStock[day - 1], hasStock[day - 1] + prices[day]);
    hasStock[day] = Math.max(hasStock[day - 1], noStock[day - 1] - prices[day]);
  }
  return noStock[days - 1];
};

let maxProfitUnlimitedTransactionsOptimized = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;
  let previousDayNoStockValue = 0;
  let previousDayHasStockValue = -prices[0];

  let currentDayNoStockValue = 0;
  let currentDayHasStockValue = 0;
  for (let day = 1; day < days; day++) {
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayHasStockValue + prices[day]);
    currentDayHasStockValue = Math.max(previousDayHasStockValue, previousDayNoStockValue - prices[day]);

    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
  }
  return previousDayNoStockValue;
};

console.log(maxProfitUnlimitedTransactions([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfitUnlimitedTransactions([1, 2, 3, 4, 5])); // 4
console.log(maxProfitUnlimitedTransactions([5, 4, 3, 2, 1])); // 0

console.log(maxProfitUnlimitedTransactionsOptimized([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfitUnlimitedTransactionsOptimized([1, 2, 3, 4, 5])); // 4
console.log(maxProfitUnlimitedTransactionsOptimized([5, 4, 3, 2, 1])); // 0
