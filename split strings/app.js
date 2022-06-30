// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){

  let splitStr = str.split('')
  splitStr.length % 2 == 0 ? splitStr : splitStr.push('_')

  let midStr = splitStr.length / 2
  let newArr = []
 
   for (let i = 0; i < midStr; i++) {
     let mutant = splitStr.splice(0, 2).join('')
     newArr.push(mutant)
   }

  return newArr
}


console.log(solution("abcdefh"));