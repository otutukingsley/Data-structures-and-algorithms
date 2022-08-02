// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


//Solution 1 
//finding the index of existing elements since they are in the same range and flipping the numbers at that index to negative numbers, index of all positive numbers + 1 will be the missing numbers.
var findDisappearedNumbers = function (nums) {

  const result = []

  for (let item of nums) {

    const index = Math.abs(item) - 1
    nums[index] = Math.abs(nums[index]) * -1
  }

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
};