var longestConsecutive = function (nums) {
  let charSet = new Set(nums);
  let count = 0;

  for (let num of charSet) {
    if (charSet.has(num - 1)) {
      continue;
    }

    let currMax = num;
    let curr = 1;

    while (charSet.has(currMax + 1)) {
      currMax++;
      curr++;
    }

    count = Math.max(count, curr);
  }

  return count;
};
