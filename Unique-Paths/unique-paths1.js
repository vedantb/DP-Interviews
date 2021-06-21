let uniquePaths = function (m, n) {
  if (m < 0 || n < 0) return 0;

  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// --- TRACK PATH ---
// Keep parent pointers and then do a dfs
// When we reach source (0, 0) as part of a DFS path, we print the current path.
// When DFS has been done for a node completely, we remove that node from the list
// so that the node does not appear in a path it is not part of.

// Unlike traditional DFS, here we traverse a visited node more than once if needed since
// our objective is to print all valid paths.

// In most cases path can be tracked using this same approach. Even when there is only one path
// instead of multiple, that one path can also be thought of as a tree, and we should be able to do DFS on it.

let uniquePathsWithPath = function (m, n) {
  if (m < 0 || n < 0) return 0;

  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  let parent = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      parent[i][j] = [];
    }
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
    if (i !== 0) parent[i][0].push([i - 1, 0]);
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
    if (j !== 0) parent[0][j].push([0, j - 1]);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      parent[i][j].push([i - 1, j]);
      parent[i][j].push([i, j - 1]);
    }
  }
  printDFS(parent, m - 1, n - 1, []);
  return dp[m - 1][n - 1];
};

function printDFS(parents, row, col, list) {
  // we need to start the DFS from destination and not source
  // because from source the path goes to many destinations
  // which means there will be many leaf nodes (nodes with zero child nodes).
  // Notice that the root(0,0) will be the only leaf if we start from destination

  if (row < 0 || col < 0) return;

  list.push([row, col]);
  if (row === 0 && col === 0) {
    for (let cell of list) {
      console.log(`${cell[0]}, ${cell[1]}`);
    }
    console.log("-----------");
  } else {
    for (let parent of parents[row][col]) {
      printDFS(parents, parent[0], parent[1], list);
    }
  }
  list.pop(); // when dfs is done for a node we remove it from the list
}

console.log(uniquePaths(3, 7));
console.log(uniquePathsWithPath(3, 7));
