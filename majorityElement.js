// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  let hash = {};
  let target = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      hash[nums[i]] += 1;

      if (hash[nums[i]] > target) {
        return nums[i];
      }
    } else {
      hash[nums[i]] = 1;
    }
  }
};
