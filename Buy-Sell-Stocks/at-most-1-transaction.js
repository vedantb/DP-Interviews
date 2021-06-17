let maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let hasStock = [-prices[0]];
  let noStock = [0];

  for (let day = 1; day < days; day++) {
    hasStock[day] = Math.max(hasStock[day - 1], -prices[day]);
    noStock[day] = Math.max(noStock[day - 1], hasStock[day - 1] + prices[day]);
  }

  return noStock[days - 1];
};

// SPACE OPTIMIZED

let maxProfitOptimized = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let previousDayHasStockValue = -prices[0];
  let previousDayNoStockValue = 0;

  let currentDayHasStockValue = 0;
  let currentDayNoStockValue = 0;
  for (let day = 1; day < days; day++) {
    currentDayHasStockValue = Math.max(previousDayHasStockValue, -prices[day]);
    currentDayNoStockValue = Math.max(previousDayNoStockValue, currentDayHasStockValue + prices[day]);
    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
  }

  return previousDayNoStockValue;
};

// PRINT DAYS

let maxProfitOptimizedWithIndex = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let previousDayHasStockValue = -prices[0];
  let previousDayNoStockValue = 0;

  let currentDayHasStockValue = 0;
  let currentDayNoStockValue = 0;
  let purchaseDay = 0;
  let saleDay = -1;
  let tempPurchaseDay = 0;
  for (let day = 1; day < days; day++) {
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayHasStockValue + prices[day]);
    if (currentDayNoStockValue > previousDayNoStockValue) {
      purchaseDay = tempPurchaseDay;
      saleDay = day;
    }
    currentDayHasStockValue = Math.max(previousDayHasStockValue, -prices[day]);
    if (currentDayHasStockValue > previousDayHasStockValue) {
      tempPurchaseDay = day;
    }
    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
  }

  if (saleDay !== -1) console.log(`Stock bought on day ${purchaseDay} and sold on ${saleDay}`);

  return previousDayNoStockValue;
};

console.log(maxProfitOptimizedWithIndex([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOptimizedWithIndex([7, 6, 4, 3, 1]));
