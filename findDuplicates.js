// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
  let result = []
  for(let i = 0; i < nums.length; i++){
      let index = Math.abs(nums[i]) - 1

      if(nums[index] < 0){
          result.push(Math.abs(nums[i]))
      }else {
          nums[index] = -1 * Math.abs(nums[index])
      }
  }

  return result
};