let findLPS = function (s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

let expandAroundCenter = function (str, left, right) {
  let L = left,
    R = right;
  while (L >= 0 && R < str.length && str[L] === str[R]) {
    L--;
    R++;
  }
  return R - L - 1;
};

console.log(`Length of LPS ---> ${findLPS("abdbca")}`);
console.log(`Length of LPS ---> ${findLPS("cddpd")}`);
console.log(`Length of LPS ---> ${findLPS("pqr")}`);
