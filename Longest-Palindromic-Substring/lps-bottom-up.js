let findLPSLength = function (st) {
  // dp[i][j] will be 'true' if the string from index 'i' to index 'j' is a palindrome
  const dp = Array(st.length)
    .fill(0)
    .map(() => Array(st.length).fill(0));
  // every string with one character is a palindrome
  for (let i = 0; i < st.length; i++) {
    dp[i][i] = true;
  }

  let maxLength = 1;
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
      if (st.charAt(startIndex) == st.charAt(endIndex)) {
        // if it's a two character string or if the remaining string is a palindrome too
        if (endIndex - startIndex == 1 || dp[startIndex + 1][endIndex - 1]) {
          dp[startIndex][endIndex] = true;
          maxLength = Math.max(maxLength, endIndex - startIndex + 1);
        }
      }
    }
  }

  return maxLength;
};

console.log(`Length of LPS ---> ${findLPSLength("abdbca")}`);
console.log(`Length of LPS ---> ${findLPSLength("cddpd")}`);
console.log(`Length of LPS ---> ${findLPSLength("pqr")}`);
