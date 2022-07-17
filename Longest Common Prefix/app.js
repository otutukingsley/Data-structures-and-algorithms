// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  // check border cases size 1 array and empty first word)
  if (!strs[0] || strs.length == 1) return strs[0] || ""

  let i = 0
  // while all words have the same character at position i, increment i
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) {
    i++
  }
  // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i)
}
