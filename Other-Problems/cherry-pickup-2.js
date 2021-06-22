let memo = {};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  return Math.max(0, cherryPickupHelper(grid, 0, 0, 0, grid[0].length - 1));
};

let cherryPickupHelper = function (grid, r1, c1, r2, c2) {
  if (
    r1 >= grid.length ||
    c1 >= grid[0].length ||
    r2 >= grid.length ||
    c2 >= grid[0].length ||
    r1 < 0 ||
    c1 < 0 ||
    r2 < 0 ||
    c2 < 0
  )
    return -Infinity;

  let subProblemKey = `${r1}-${r2}-${c1}-${c2}`;
  if (subProblemKey in memo) return memo[subProblemKey];

  let cherries = 0;
  // if both persons standing on the same cell, don't double count and return what's in this cell (could be 1 or 0)
  if (r1 === r2 && c1 === c2) {
    cherries = grid[r1][c1];
  } else {
    // otherwise, number of cherries collected by both of them equals the sum of what's on their cells
    cherries = grid[r1][c1] + grid[r2][c2];
  }

  if (r1 === grid.length - 1) {
    memo[subProblemKey] = cherries;
    return cherries;
  }

  let sum1 = cherryPickupHelper(grid, r1 + 1, c1, r2 + 1, c2);
  let sum2 = cherryPickupHelper(grid, r1 + 1, c1 - 1, r2 + 1, c2);
  let sum3 = cherryPickupHelper(grid, r1 + 1, c1 + 1, r2 + 1, c2);
  let sum4 = cherryPickupHelper(grid, r1 + 1, c1, r2 + 1, c2 + 1);
  let sum5 = cherryPickupHelper(grid, r1 + 1, c1 - 1, r2 + 1, c2 + 1);
  let sum6 = cherryPickupHelper(grid, r1 + 1, c1 + 1, r2 + 1, c2 + 1);
  let sum7 = cherryPickupHelper(grid, r1 + 1, c1, r2 + 1, c2 - 1);
  let sum8 = cherryPickupHelper(grid, r1 + 1, c1 - 1, r2 + 1, c2 - 1);
  let sum9 = cherryPickupHelper(grid, r1 + 1, c1 + 1, r2 + 1, c2 - 1);
  cherries += Math.max(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9);

  memo[subProblemKey] = cherries;
  return cherries;
};

console.log(
  cherryPickup([
    [1, 0, 0, 3],
    [0, 0, 0, 3],
    [0, 0, 3, 3],
    [9, 0, 3, 3]
  ])
);
