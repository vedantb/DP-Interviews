let maxProfitWithCooldown = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let noStock = [0];
  let hasStock = [-prices[0]];
  let justSold = [-Infinity];

  for (let day = 1; day < days; day++) {
    noStock[day] = Math.max(noStock[day - 1], justSold[day - 1]);
    hasStock[day] = Math.max(noStock[day - 1] - prices[day], hasStock[day - 1]);
    justSold[day] = hasStock[day - 1] + prices[day];
  }

  return Math.max(noStock[days - 1], justSold[days - 1]);
};

// --- SPACE OPTIMIZED ---
let maxProfitWithCooldownOptimized = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let previousDayNoStockValue = 0;
  let previousDayHasStockValue = -prices[0];
  let previousDayJustSoldValue = -Infinity;

  let currentDayHasStockValue = 0;
  let currentDayJustSoldValue = 0;
  let currentDayNoStockValue = 0;

  for (let day = 1; day < days; day++) {
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayJustSoldValue);
    currentDayHasStockValue = Math.max(previousDayNoStockValue - prices[day], previousDayHasStockValue);
    currentDayJustSoldValue = previousDayHasStockValue + prices[day];

    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
    previousDayJustSoldValue = currentDayJustSoldValue;
  }

  return Math.max(previousDayNoStockValue, previousDayJustSoldValue);
};

// -- OPTIMIZED SOLUTION WITH PRINTED DAYS --
let maxProfitWithCooldownOptimizedWithPath = function (prices) {
  if (!prices || prices.length < 2) return 0;
  let days = prices.length;

  let previousDayNoStockValue = 0;
  let previousDayHasStockValue = -prices[0];
  let previousDayJustSoldValue = -Infinity;

  let currentDayHasStockValue = 0;
  let currentDayJustSoldValue = 0;
  let currentDayNoStockValue = 0;

  let purchaseDays = [0];
  let saleDays = [0];
  let tempPurchaseDays = [0];

  for (let day = 1; day < days; day++) {
    currentDayNoStockValue = Math.max(previousDayNoStockValue, previousDayJustSoldValue);
    currentDayHasStockValue = Math.max(previousDayNoStockValue - prices[day], previousDayHasStockValue);
    currentDayJustSoldValue = previousDayHasStockValue + prices[day];

    // Compute Optimal Path
    if (currentDayJustSoldValue > currentDayNoStockValue) {
      // if the max profit for today is coming from the justSold state that means
      // that we sold a stock today so update sale day with today and grab purchase
      // day from tempPurchaseDays[day - 1] since we need to know which purchase day
      // gave more max profit for hasStock state for yesterday
      saleDays[day] = day;
      purchaseDays[day] = tempPurchaseDays[day - 1];
    } else {
      saleDays[day] = saleDays[day - 1];
      purchaseDays[day] = purchaseDays[day - 1];
    }

    if (currentDayHasStockValue > previousDayHasStockValue) {
      tempPurchaseDays[day] = day;
    } else {
      tempPurchaseDays[day] = tempPurchaseDays[day - 1];
    }

    previousDayHasStockValue = currentDayHasStockValue;
    previousDayNoStockValue = currentDayNoStockValue;
    previousDayJustSoldValue = currentDayJustSoldValue;
  }

  printPath(days, saleDays, purchaseDays);

  return Math.max(previousDayNoStockValue, previousDayJustSoldValue);
};

let printPath = function (days, saleDays, purchaseDays) {
  let stack = [];
  let lookupDay = days - 1;
  if (saleDays[days - 1] !== 0) {
    while (lookupDay > 0 && saleDays[lookupDay] !== 0) {
      stack.push(saleDays[lookupDay] + 1);
      stack.push(purchaseDays[lookupDay] + 1);
      lookupDay = purchaseDays[lookupDay] - 2;
    }
  }

  console.log("1-Indexed Days");
  while (stack.length) {
    console.log(`Buy on day ${stack.pop()} and sell on day ${stack.pop()}`);
  }
};

console.log(maxProfitWithCooldownOptimizedWithPath([1, 2, 3, 0, 2]));
console.log(maxProfitWithCooldownOptimized([1, 2, 3, 0, 2]));
console.log(maxProfitWithCooldown([1, 2, 3, 0, 2]));
