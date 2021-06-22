/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => new Array(m).fill(0)));
  return Math.max(0, cherryPickupHelper(grid, 0, 0, m - 1, dp));
};

let cherryPickupHelper = function (grid, r, c1, c2, dp) {
  const n = grid.length;
  const m = grid[0].length;
  if (r === n) return -Infinity;

  if (dp[r][c1][c2] !== 0) {
    return dp[r][c1][c2];
  }

  let res = 0;

  for (let i = -1; i <= 1; i++) {
    const nc1 = i + c1;
    for (let j = -1; j <= 1; j++) {
      const nc2 = j + c2;
      if (nc1 >= 0 && nc1 < m && nc2 >= 0 && nc2 < m) {
        res = Math.max(res, cherryPickupHelper(grid, r + 1, nc1, nc2, dp));
      }
    }
  }

  const currCherries = c1 === c2 ? grid[r][c1] : grid[r][c1] + grid[r][c2];
  return (dp[r][c1][c2] = res + currCherries);
};

console.log(
  cherryPickup([
    [1, 0, 0, 3],
    [0, 0, 0, 3],
    [0, 0, 3, 3],
    [9, 0, 3, 3]
  ])
);
