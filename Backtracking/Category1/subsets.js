// WITHOUT DUPS
let subsets = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack(res, [], nums, 0);
  return res;
};

let backtrack = function (completeSolution, partialSolution, nums, start) {
  completeSolution.push([...partialSolution]);
  for (let i = start; i < nums.length; i++) {
    partialSolution.push(nums[i]);
    backtrack(completeSolution, partialSolution, nums, start);
    partialSolution.pop();
  }
};

// WITH DUPS
let subsets2 = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack2(res, [], nums, 0);
  return res;
};

let backtrack2 = function (completeSolution, partialSolution, nums, start) {
  completeSolution.push([...partialSolution]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    partialSolution.push(nums[i]);
    backtrack2(completeSolution, partialSolution, nums, start);
    partialSolution.pop();
  }
};
