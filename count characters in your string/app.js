// Count characters in your string



// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
  let newString = [...string]
  let newObj = new Object()

  newString.forEach(alphabet => {
      newObj[alphabet] = newString.filter(item => item == alphabet).length
  })
  return newObj
}


count("aba")

console.log(count("assesa"));



