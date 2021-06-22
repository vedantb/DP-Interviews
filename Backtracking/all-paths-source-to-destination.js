// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * Another fairly beginner level backtracking problem to understand the concept
 * Backtracking = DFS
 */

let allPathsSourceTarget = function (graph) {
  let res = [];
  if (!graph || graph.length === 0) return res;
  let n = graph.length - 1;
  let partialSolution = [];
  partialSolution.push(0);
  backtrack(0, graph, partialSolution, res, n);
  return res;
};

let backtrack = function (startId, graph, partialSolution, completeSolution, endId) {
  if (startId === endId) {
    completeSolution.push([...partialSolution]);
    return;
  }

  let candidates = graph[startId];
  for (let candidate of candidates) {
    partialSolution.push(candidate);
    backtrack(candidate, graph, partialSolution, completeSolution, endId);
    partialSolution.pop(candidate);
  }
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
console.log(allPathsSourceTarget([[1], []]));
