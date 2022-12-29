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
