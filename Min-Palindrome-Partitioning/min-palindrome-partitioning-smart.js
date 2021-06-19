/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (!s || s.length <= 1) return 0;
  let n = s.length;
  let dp = Array(n);

  // We are initializing the dp array with the worst case scenario
  // worst case if all letters are different and it's not a palindrome
  // you would need a cut after all letters so there would be i-1 cuts
  // note: we return dp[n-1] so we would return i-1
  for (let i = 0; i < n; i++) dp[i] = i;

  // we start from index 1 and check if it's the middle of a palindrome.
  // we need to check for 2 cases for odd & even lengths where we assume the middle is index i
  // and another case where we assume the middle is i & i-1 and then expand from there.
  // if we find a palindrome, we can update the end of the palindrome with the cut required.
  for (let mid = 1; mid < n; mid++) {
    for (let start = mid, end = mid; start >= 0 && end < n && s[start] === s[end]; start--, end++) {
      let newCut = start === 0 ? 0 : dp[start - 1] + 1;
      dp[end] = Math.min(dp[end], newCut);
    }
    for (let start = mid - 1, end = mid; start >= 0 && end < n && s[start] === s[end]; start--, end++) {
      let newCut = start === 0 ? 0 : dp[start - 1] + 1;
      dp[end] = Math.min(dp[end], newCut);
    }
  }
  return dp[n - 1];
};

console.log(minCut("abb"));
