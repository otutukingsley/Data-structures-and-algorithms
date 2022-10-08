/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
};

var search2 = function (nums, target) {
  let lo = 0; // 3
  let hi = nums.length - 1; // 5

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2);

    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }

  return nums[lo] === target ? lo : -1;
};

var search3 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
};
