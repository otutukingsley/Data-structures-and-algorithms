var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length).fill(0);
  let suffix = new Array(nums.length).fill(0);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[0] = 1;
    } else {
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = suffix[i + 1] * nums[i + 1];
    }
  }

  for (let i = 0; i < prefix.length; i++) {
    prefix[i] = prefix[i] * suffix[i];
  }

  return prefix;
};
