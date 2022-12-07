var findDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++){
      let index = Math.abs(nums[i])

      if(nums[index] < 0){
          return index
      } else {
       nums[index] = -1 * Math.abs(nums[index])
      }
  }

};