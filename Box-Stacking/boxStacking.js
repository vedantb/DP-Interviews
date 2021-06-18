function Box(width, length, height) {
  this.width = width;
  this.length = length;
  this.height = height;
}

let findMaxHeightBoxStack = function (boxes, n) {
  let heights = Array(n);

  // we will do LIS on the heights array
  for (let i = 0; i < n; i++) {
    heights[i] = boxes[i].height;
  }

  let maxHeight = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (
        boxes[j].width > boxes[i].width &&
        boxes[j].length > boxes[i].length &&
        heights[i] < heights[j] + boxes[i].height
      ) {
        heights[i] = heights[j] + boxes[i].height;
      }
    }
    maxHeight = Math.max(maxHeight, heights[i]);
  }
  return maxHeight;
};

let boxStacking = function (boxes, n) {
  let orientations = Array(3 * n);
  let index = 0;
  for (let i = 0; i < n; i++) {
    orientations[index] = boxes[i]; // no rotation
    index++;

    orientations[index] = new Box(
      Math.max(boxes[i].height, boxes[i].length),
      Math.min(boxes[i].height, boxes[i].length),
      boxes[i].width
    );

    index++;
    orientations[index] = new Box(
      Math.max(boxes[i].height, boxes[i].width),
      Math.min(boxes[i].height, boxes[i].width),
      boxes[i].length
    );
    index++;
  }

  orientations.sort((a, b) => b.length * b.width - a.length * a.width);
  return findMaxHeightBoxStack(orientations, 3 * n);
};

let boxes = [];
boxes.push(new Box(4, 6, 7));
boxes.push(new Box(1, 2, 3));
boxes.push(new Box(4, 5, 6));
boxes.push(new Box(10, 12, 32));
console.log(boxStacking(boxes, boxes.length));
