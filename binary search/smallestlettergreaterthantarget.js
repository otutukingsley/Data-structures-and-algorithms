var nextGreatestLetter = function(letters, target) {
  let left  = 0
  let right = letters.length - 1
  let nextLetter = letters[left]
  let mid = Math.floor ((left + right) / 2)
  
  while (left <= right) {
      
      if(target < letters[mid]){
          nextLetter = letters[mid]
          right = mid - 1
      } else {
          left = mid + 1
      }
      
      mid = Math.floor ((left + right) / 2)
  }
  
return nextLetter
};