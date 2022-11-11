var sortedSquares = function (nums) {
  let dummy = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let dummyIdx = nums.length - 1;

  while (left <= right) {
    let leftSquare = Math.pow(nums[left], 2);
    let rightSquare = Math.pow(nums[right], 2);

    if (leftSquare < rightSquare) {
      dummy[dummyIdx] = rightSquare;
      right--;
    } else {
      dummy[dummyIdx] = leftSquare;
      left++;
    }

    dummyIdx--;
  }

  return dummy;
};
