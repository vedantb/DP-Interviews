// https://leetcode.com/problems/restore-ip-addresses/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  backtrack(s, 0, res, [], 0);
  return res;
};

let backtrack = function (s, idx, completeSolution, partialSolution, step) {
  if (step === 4 && idx === s.length) {
    completeSolution.push(partialSolution.join("."));
    return;
  }
  if (step === 4 || idx === s.length) return;
  for (let ipSegment of getSuitableIpSegments(s, idx)) {
    partialSolution.push(ipSegment);
    backtrack(s, idx + ipSegment.length, completeSolution, partialSolution, step + 1);
    partialSolution.pop();
  }
};

let getSuitableIpSegments = function (s, idx) {
  let res = [];
  for (let i = 1; i <= 3 && idx + i <= s.length; i++) {
    let ipSegment = s.substring(idx, idx + i);
    if (parseInt(ipSegment) > 255) continue;
    if (ipSegment[0] === "0" && ipSegment.length > 1) continue;
    res.push(ipSegment);
  }
  return res;
};

console.log(restoreIpAddresses("101023"));
