let longestStringChain = function (words) {
  words.sort((a, b) => a.length - b.length);

  let dp = {};
  for (let word of words) {
    dp[word] = 1;
  }

  let max = 0;
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      let prev = word.substring(0, i) + word.substring(i + 1);
      if (prev in dp) {
        dp[word] = Math.max(dp[word], dp[prev] + 1);
      }
    }
    max = Math.max(max, dp[word]);
  }
  return max;
};

console.log(longestStringChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStringChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
