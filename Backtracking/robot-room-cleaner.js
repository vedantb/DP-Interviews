/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  let visitedSet = new Set();
  backtrack(0, 0, 0, visitedSet, robot);
};

let backtrack = function (row, col, dir, visited, robot) {
  visited.add(`${row}-${col}`);
  robot.clean();
  for (let i = 0; i < 4; i++) {
    let newDir = (i + dir) % 4;
    let newRow = row + directions[newDir][0];
    let newCol = col + directions[newDir][1];
    if (!visited.has(`${newRow}-${newCol}`) && robot.move()) {
      backtrack(newRow, newCol, newDir, visited, robot);
      robot.turnRight();
      robot.turnRight();
      robot.move();
      robot.turnRight();
      robot.turnRight();
    }
    robot.turnRight();
  }
};
