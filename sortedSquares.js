// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


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
