// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
   const newStr = str.replace(/[^a-z0-9]/gi, " ").split(" ");
   let capitalizeArr = []

   for (let i = 1; i < newStr.length; i++) {
     const element = newStr[i];
     let theWord = element[0].toUpperCase() + element.slice(1, element.length)
    capitalizeArr.push(theWord)
   }
   let ansArr = [newStr[0], ...capitalizeArr]
  return ansArr.join('')
}


console.log(toCamelCase("the_stealth_warrior"));