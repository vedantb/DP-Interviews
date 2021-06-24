let count = 0;
let countpermutations = function (n) {
  backtrack(1, Array(n), n);
  return count;
};

let backtrack = function (partialSolutionIndex, used, n) {
  if (partialSolutionIndex === n + 1) {
    count++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!used[i] && ((i + 1) % partialSolutionIndex === 0 || partialSolutionIndex % (i + 1) === 0)) {
      used[i] = true;
      backtrack(partialSolutionIndex + 1, used, n);
      used[i] = false;
    }
  }
};

console.log(countpermutations(2));
