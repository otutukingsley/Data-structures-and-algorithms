// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Solution 1
// using the bitwise XOR opetation to add all the numbers since every element appears twice except for one, our solution will return the unique number

//example 1:
//for [2, 2, 1] we will have 
/*
010
010
001 
----------------
001 => 1
----------------
*/

var singleNumber = function (nums) {
  let output = 0

  for (let item of nums) {
    output ^= item
  }

  return output
};


// Solution 2 
// Using a hash map we increment the value of each key if it already exists esle we set the value to 1, since there is only one unique number in the array, the key with the value of 1 is the unique number


var singleNumber = function (nums) {
  let result = {}

  for (let i = 0; i < nums.length; i++) {

    if (result[nums[i]] !== undefined) {
      result[nums[i]] += 1
    } else {
      result[nums[i]] = 1
    }

  }

  for (let key in result) {

    if (result[key] === 1) {

      return key
    }
  }
};