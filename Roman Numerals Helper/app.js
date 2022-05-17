// Roman Numerals Helper

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Symbol 	Value
// I 	1
// IV 	4
// V 	5
// X 	10
// L 	50
// C 	100
// D 	500
// M 	1000

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// class RomanNumerals {
//   constructor() {
//     this.lookup = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1,
//     };
//   }
//   toRoman(num) {
//     let roman = '';
//     for (let i in this.lookup) {
//       while (num >= this.lookup[i]) {
//         roman += i;
//         num -= this.lookup[i];
//       }
//     }
//     return roman;
//   }
//   fromRoman(roman) {
//     let numerial = [...roman.split('')];

//     let total = 0,
//           current,
//           currentValue,
//           next,
//           nextValue;

//     for (let i = 0; i < numerial.length; i++) {
//       current = numerial[i];
//       currentValue = this.lookup[current];
//       next = numerial[i + 1];
//       nextValue = this.lookup[next]

//       if (currentValue < nextValue) {
//         total -= currentValue
//       } else {
//         total += currentValue
//       }

      
//     }

//     return total;

//   }
// }

// const romanNumerals = new RomanNumerals();

// romanNumerals.fromRoman('IV');

// console.log(romanNumerals.toRoman(1350));


function RomanNumerals () {
}

RomanNumerals.toRoman = function (num) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  let roman = '';
    for (let i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
  
    return roman;
}

RomanNumerals.fromRoman = function (roman) {
  let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  let numerial = [...roman.split('')];

    let total = 0,
          current,
          currentValue,
          next,
          nextValue;

    for (let i = 0; i < numerial.length; i++) {
      current = numerial[i];
      currentValue = lookup[current];
      next = numerial[i + 1];
      nextValue = lookup[next]

      if (currentValue < nextValue) {
        total -= currentValue
      } else {
        total += currentValue
      }

      
    }

    return total;
}


console.log(RomanNumerals.fromRoman("XX"));