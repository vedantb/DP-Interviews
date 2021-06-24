// WITHOUT DUPS
let permute = function (nums) {
  let res = [];
  backtrack(res, [], nums, Array(nums.length));
  return res;
};

let backtrack = function (completeSolution, partialSolution, nums, visited) {
  if (partialSolution.length === nums.length) {
    completeSolution.push([...partialSolution]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    partialSolution.push(nums[i]);
    visited[i] = true;
    backtrack(completeSolution, partialSolution, nums, visited);
    visited[i] = false;
    partialSolution.pop();
  }
};

// WITH DUPLICATES
let permute2 = function (nums) {
  let res = [];
  backtrack2(res, [], nums, Array(nums.length));
  return res;
};

let backtrack2 = function (completeSolution, partialSolution, nums, visited) {
  if (partialSolution.length === nums.length) {
    completeSolution.push([...partialSolution]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    if (i > 0 && nums[i] === nums[i - 1] && !visited[i]) continue;
    partialSolution.push(nums[i]);
    visited[i] = true;
    backtrack2(completeSolution, partialSolution, nums, visited);
    visited[i] = false;
    partialSolution.pop();
  }
};
