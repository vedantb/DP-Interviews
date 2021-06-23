let permute = function (nums) {
  let result = [];
  backtrack(result, [], nums, Array(nums.length));
  return result;
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
    partialSolution.pop();
    visited[i] = false;
  }
};
