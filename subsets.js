var subsets = function (nums) {
  let result = [];
  const backtracking = (index, arr) => {
    if (index === nums.length) {
      result.push([...arr]);
      return;
    }

    arr.push(nums[index]);
    backtracking(index + 1, arr);
    arr.pop();
    backtracking(index + 1, arr);
  };

  backtracking(0, []);

  return result;
};


// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


var subsetsII = function(nums) {
  const sorted = nums.sort((a,b) => a - b)
  const output = []
  const backtracking = (arr, idx) => {
      if(idx >= sorted.length){
          output.push([...arr])
          return
      }

      arr.push(sorted[idx])
      backtracking(arr, idx + 1)
      arr.pop()

      while (idx < sorted.length - 1 && sorted[idx] === sorted[idx + 1]) {
          idx += 1
      }

      backtracking(arr, idx + 1)
  }


  backtracking([], 0)

  return output
};