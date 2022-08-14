// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.



// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// var countOnes = function (data) {
//   let count = 0
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] == '1') {
//       count++
//     }
//   }

//   return count
// }


// var countBits = function (n) {
//   let result = []
//   let numLength = n + 1

//   for (let i = 0; i < numLength; i++) {
//     const parsed = countOnes(i.toString(2))
//     result.push(parsed)
//   }

//   return result
// };



// var nextGreatestLetter = function (letters, target) {
//   let left = 0
//   let right = letters.length - 1
//   let nextLetter = letters[left]
//   let mid = Math.floor((left + right) / 2)

//   while (left <= right) {
//     if (target < letters[mid]) {
//       nextLetter = letters[mid]
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//     mid = Math.floor((left + right) / 2)
//   };

//   return nextLetter
// }
// console.log(nextGreatestLetter(['c', 'f', 'j'], 'i'))



// function balancedParens(n) {
//   if (n === 0) return [""]

//   let parenArr = []

//   for (let i = 0; i < n; i++) {
//     parenArr.push('()')
//   }

//   console.log(parenArr.join(''))
// }

// balancedParens(4)