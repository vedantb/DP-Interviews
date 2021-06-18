const findLISLength = function (nums) {
  const dp = Array(nums.length).fill(1);
  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }
  return maxLength;
};

const findListLengthAndPrintPath = function (nums) {
  if (!nums || nums.length === 0) return 0;
  const dp = Array(nums.length).fill(1);
  const parent = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) parent[i] = i;

  let maxLength = 1;
  let end = 0; // end index of LIS
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
    if (maxLength < dp[i]) {
      maxLength = dp[i];
      end = i;
    }
  }

  // printing the path
  let stack = [];
  while (parent[end] !== end) {
    stack.push(nums[end]);
    end = parent[end];
  }
  stack.push(nums[end]);
  stack.reverse();
  console.log(stack.join(" "));

  return maxLength;
};

console.log(findListLengthAndPrintPath([4, 2, 3, 6, 10, 1, 12]));
console.log(findListLengthAndPrintPath([-4, 10, 3, 7, 15]));
