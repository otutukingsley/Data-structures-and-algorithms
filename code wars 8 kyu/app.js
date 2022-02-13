// Plural 8 kyu

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  let ans = n === 1 ? false : true;
}

// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  let newStr = s.split('');

  return [...newStr].filter((item) => isNaN(item) || item === ' ').join('')
}

// stringClean('!!');
// console.log(stringClean('! !'));





// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
  return [...n.toString().split('')].map(item => Number(item)).reverse()
}

// console.log(digitize(35231));


