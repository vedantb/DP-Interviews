// TODO: Come back to this solution

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let stack = [];
  stack.push(Infinity);
  let res = 0;
  for (let num of arr) {
    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      let middle = stack.pop();
      res += middle * Math.min(num, stack[stack.length - 1]);
    }
    stack.push(num);
  }
  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }
  return res;
};
