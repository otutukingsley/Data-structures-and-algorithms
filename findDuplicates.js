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