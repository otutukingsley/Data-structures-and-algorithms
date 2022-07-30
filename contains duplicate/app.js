

//Solution 1 
var containsDuplicate = function (nums) {
  let result = {}

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]

    if (result[item] !== undefined) {
      return true
    } else {
      result[item] = 1
    }
  }

  return false
};

//Solution 2 

