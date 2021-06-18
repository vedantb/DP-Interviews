let longestStringChain = function (words) {
  words.sort((a, b) => a.length - b.length);

  let len = words.length;
  let dp = Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

let isPredecessor = function (str1, str2) {
  if (str2.length !== str1.length + 1) return false;
  let diff = 0;
  let j = 0;
  let i = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      diff++;
      j++;
    } else {
      i++;
      j++;
    }
    if (diff >= 2) return false;
  }
  return true;
};

console.log(longestStringChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStringChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));
