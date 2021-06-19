var minCut = function (s) {
  if (!s || s.length <= 1) return 0;

  let n = s.length;
  let isPalindrome = Array(n)
    .fill(false)
    .map(() => Array(n).fill(false));

  let dp = Array(n).fill(0);

  // this fills up the isPalindrome table and calculates whether every substring
  // of every length is a palindrome or not
  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      let subStringLength = j - i + 1;
      if (subStringLength === 1) isPalindrome[i][j] = true;
      else if (subStringLength === 2 && s[i] === s[j]) isPalindrome[i][j] = true;
      else {
        isPalindrome[i][j] = s[i] === s[j] && isPalindrome[i + 1][j - 1];
      }
    }
  }

  // dp[i] represents the number of cuts required from the substring 0..i
  // if it's a palindrome obviously no cuts are required.
  // If it's not a palindrome we check iterativly to find any index after which we can find a palindrome
  // e.g. at [0,5] we find it's not a palindrome, so we initially set dp[5] to infinity
  // then we check if [1,5] is a palindrom. if yes, we can update dp[5] with the cuts required for dp[0] + 1
  // if [1,5] is not a palindrome we loop and check if [2.5] is a palindrome.
  for (let i = 0; i < n; i++) {
    if (isPalindrome[0][i]) dp[i] = 0;
    else {
      dp[i] = Infinity;
      for (let j = 0; j < i; j++) {
        if (isPalindrome[j + 1][i]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }
  return dp[n - 1];
};

console.log(minCut("abab"));
