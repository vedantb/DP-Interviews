/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  return Math.max(0, cherryPickupHelper(grid, grid.length, 0, 0, 0, 0));
};

let cherryPickupHelper = function (grid, n, r1, c1, r2, c2) {
  if (r1 >= n || c1 >= n || r2 >= n || c2 >= n || grid[r1][c1] === -1 || grid[r2][c2] === -1) return -Infinity;

  // if person 1 reached the bottom right, return what's in there (1 or 0)
  if (r1 === n - 1 && c1 === n - 1) return grid[r1][c1];

  // if person 2 reached the bottom right, return what's in there (could be 1 or 0)
  if (r2 === n - 1 && c2 === n - 1) return grid[r2][c2];

  let cherries;
  // if both persons standing on the same cell, don't double count and return what's in this cell (could be 1 or 0)
  if (r1 === r2 && c1 === c2) {
    cherries = grid[r1][c1];
  } else {
    // otherwise, number of cherries collected by both of them equals the sum of what's on their cells
    cherries = grid[r1][c1] + grid[r2][c2];
  }

  // since each person of the 2 person can move only to the bottom or to the right,
  // then the total number of cherries quals the max of the following possibilities:
  //    P1     |      P2
  //   DOWN    |     DOWN
  //   DOWN    |     RIGHT
  //   RIGHT   |     DOWN
  //   RIGHT   |     RIGHT

  cherries += Math.max(
    cherryPickupHelper(grid, n, r1 + 1, c1, r2 + 1, c2),
    cherryPickupHelper(grid, n, r1 + 1, c1, r2, c2 + 1),
    cherryPickupHelper(grid, n, r1, c1 + 1, r2 + 1, c2),
    cherryPickupHelper(grid, n, r1, c1 + 1, r2, c2 + 1)
  );

  return cherries;
};

console.log(
  cherryPickup([
    [0, 1, -1],
    [-1, 0, 1],
    [1, 1, 1]
  ])
);
