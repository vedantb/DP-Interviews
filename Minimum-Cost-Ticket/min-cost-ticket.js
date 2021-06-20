let minCostTickets = function (days, costs) {
  let set = new Set();
  days.sort((a, b) => a - b);
  let minDay = days[0]; // first travel day
  let maxDay = days[days.length - 1]; // last travel day

  // Optimization
  // we would need to query if a day is a travel day or not. To optimize
  // searching for this, we store the days in a set
  for (let day of days) {
    set.add(day);
  }

  let dp = Array(maxDay - minDay + 1).fill(0);

  for (let i = 0; i < dp.length; i++) {
    // This is a very important observation:
    // We compute results only for travel days even though the size of dp[] array is (maxDay - minDay + 1)
    // DP value for any non-travel day would be same as last travel day, since we did not travel in between
    // the last travel day and any non-travel day before next travel day
    if (!set.has(i + minDay)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = i - 1 >= 0 ? dp[i - 1] + costs[0] : costs[0];
      dp[i] = Math.min(dp[i], i - 7 >= 0 ? dp[i - 7] + costs[1] : costs[1]);
      dp[i] = Math.min(dp[i], i - 30 >= 0 ? dp[i - 30] + costs[2] : costs[2]);
    }
  }
  return dp[dp.length - 1];
};

console.log(minCostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
console.log(minCostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));
