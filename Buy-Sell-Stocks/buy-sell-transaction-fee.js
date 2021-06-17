let maxProfitWithFee = function (prices, fee) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;

  let hasStock = [-prices[0]];
  let noStock = [0];

  for (let day = 1; day < days; day++) {
    hasStock[day] = Math.max(hasStock[day - 1], noStock[day - 1] - prices[day]);
    noStock[day] = Math.max(noStock[day - 1], hasStock[day - 1] + prices[day] - fee);
  }

  return noStock[days - 1];
};

// --- SPACE OPTIMIZED ----
let maxProfitWithFeeOptimized = function (prices, fee) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;

  let previousDayHasStockValue = -prices[0];
  let previousDayNoStockValue = 0;

  let currentDayHasStockValue = 0;
  let currentDayNoStockValue = 0;

  for (let day = 1; day < days; day++) {
    currentDayHasStockValue = Math.max(previousDayHasStockValue, previousDayNoStockValue - prices[day]);
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayHasStockValue + prices[day] - fee);

    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
  }

  return previousDayNoStockValue;
};

// ---- PRINT PATH ----
let maxProfitWithFeeOptimizedWithPath = function (prices, fee) {
  if (!prices || prices.length === 0) return 0;
  let days = prices.length;

  let previousDayHasStockValue = -prices[0];
  let previousDayNoStockValue = 0;

  let purchaseDayStack = [1];
  let saleDayStack = [];

  let currentDayHasStockValue = 0;
  let currentDayNoStockValue = 0;

  for (let day = 1; day < days; day++) {
    currentDayHasStockValue = Math.max(previousDayHasStockValue, previousDayNoStockValue - prices[day]);
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayHasStockValue + prices[day] - fee);

    if (currentDayHasStockValue !== previousDayHasStockValue) {
      if (purchaseDayStack.length > saleDayStack.length) {
        purchaseDayStack.pop();
      }
      purchaseDayStack.push(day + 1);
    }

    if (currentDayNoStockValue !== previousDayNoStockValue) {
      if (purchaseDayStack.length === saleDayStack.length) {
        saleDayStack.pop();
      }
      saleDayStack.push(day + 1);
    }

    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
  }

  // This would happen when a lower price was at the end so we bought
  // the stock but never had a chance to sell it
  if (purchaseDayStack.length > saleDayStack.length) {
    purchaseDayStack.pop();
  }

  while (purchaseDayStack.length) {
    console.log(`Stock bought on day ${purchaseDayStack.pop()} and sold on ${saleDayStack.pop()}`);
  }

  return previousDayNoStockValue;
};

console.log(`Maximum Profit => ${maxProfitWithFee([1, 3, 2, 8, 4, 9], 2)}`);
console.log(`Maximum Profit => ${maxProfitWithFeeOptimized([1, 3, 2, 8, 4, 9], 2)}`);
console.log(`Maximum Profit => ${maxProfitWithFeeOptimizedWithPath([1, 3, 2, 8, 4, 9], 2)}`);
