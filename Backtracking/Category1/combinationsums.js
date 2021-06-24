let combinationSum1 = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack(res, [], nums, target, 0);
  return res;
};

let backtrack = function (completeSolution, partialSolution, nums, remainingTarget, start) {
  if (remainingTarget < 0) return;
  if (remainingTarget === 0) {
    completeSolution.push([...partialSolution]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    partialSolution.push(nums[i]);
    backtrack(completeSolution, partialSolution, nums, remainingTarget - nums[i], i);
    partialSolution.pop();
  }
};

let combinationSum2 = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack2(res, [], nums, target, 0);
  return res;
};

let backtrack2 = function (completeSolution, partialSolution, nums, remainingTarget, start) {
  if (remainingTarget < 0) return;
  if (remainingTarget === 0) {
    completeSolution.push([...partialSolution]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (i !== start && nums[i] === nums[i - 1]) continue;
    partialSolution.push(nums[i]);
    backtrack2(completeSolution, partialSolution, nums, remainingTarget - nums[i], i + 1);
    partialSolution.pop();
  }
};

let combinationSum3 = function (k, n) {
  let res = [];
  backtrack3(res, [], k, n, 1);
  return res;
};

let backtrack3 = function (completeSolution, partialSolution, k, remainingTarget, start) {
  if (remainingTarget === 0 && partialSolution.length === k) {
    completeSolution.push([...partialSolution]);
    return;
  }
  if (remainingTarget < 0 || partialSolution.length >= k) return;

  for (let i = start; i <= 9; i++) {
    partialSolution.push(nums[i]);
    backtrack3(completeSolution, partialSolution, k, remainingTarget - i, i + 1);
    partialSolution.pop();
  }
};
