// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step




//Using Recursion
var climbStairs = function (n, cache = {}) {
  if (n in cache) return cache[n]
  if (n === 0) return 1
  if (n < 0) return 0

  cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache)

  return cache[n]
};

console.log(climbStairs(10))

/* 

cache[5] = climbStairs(4, cache) + climbStairs(3, cache) => cache[4] + cache[3] = 8

cache[4] = climbStairs(3, cache) + climbStairs(2, cache) => cache[3] + cache[2] = 5

cache[3] = climbStairs(2, cache) + climbStairs(1, cache) => cache[2] + cache[1] = 3

cache[2] = climbStairs(1, cache) + climbStairs(0, cache) => cache[1] + 1 
= 2

cache[1] = climbStairs(0, cache) + climbStairs(-1, cache) ==> 1 + 0  
= 1


Our recursive function should always run in such a way that leads us to our base cases or case to stop the function. 

It bubbles up starting from the base case we can get other cases.
*/