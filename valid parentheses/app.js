// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Examples:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let result = []

  for (let i = 0; i < s.length; i++) {
    let char = result[result.length - 1]

    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      result.push(s[i])
    } else if (
      (char == "(" && s[i] == ")") ||
      (char == "{" && s[i] == "}") ||
      (char == "[" && s[i] == "]")
    ) {
      result.pop()
    } else {
      return false
    }
  }

  return result.length ? false : true
}
