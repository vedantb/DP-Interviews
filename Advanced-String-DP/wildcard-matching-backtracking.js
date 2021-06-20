let isMatch = function (str, p) {
  let slen = str.length;
  let plen = p.length;
  let sIdx = 0;
  let pIdx = 0;
  let starIdx = -1;
  let sTmpIdx = -1;
  while (sIdx < slen) {
    // If the pattern caracter = string character
    // or pattern character = '?'
    if (pIdx < plen && (p[pIdx] === "?" || p[pIdx] === str[sIdx])) {
      sIdx++;
      pIdx++;
    }
    // if pattern character is '*'
    else if (pIdx < plen && p[pIdx] === "*") {
      // save the current star index and string index to come back later for backtracking
      // assume you have 0 occurrences for * and just increment the pattern index
      starIdx = pIdx;
      sTmpIdx = sIdx;
      ++pIdx;
    }
    // there was a mismatch, we are trying to backtrack but there are no previous occurrences of *
    // to backtrack to, so we return false.
    else if (starIdx === -1) {
      return false;
    }
    // we backtrack to where we found * earlier, and assume there's one more occurrence than before
    // and try to match the str and pattern again
    else {
      pIdx = starIdx + 1;
      sIdx = sTmpIdx + 1;
      sTmpIdx = sIdx;
    }
  }

  for (let i = pIdx; i < plen; i++) {
    if (p[i] !== "*") return false;
  }
  return true;
};
