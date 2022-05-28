// Where my anagrams at? 

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}


function anagrams(word, words) {
  let filterWord = word.split('')
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    let singleWordArr = [...words[i].split('')];
    let filterWordArr = [...filterWord]

    while (filterWordArr.length > 0) {
      let firstWord = filterWordArr[0]  
      if (singleWordArr.includes(firstWord)) {
        singleWordArr.splice(singleWordArr.indexOf(firstWord), 1)
      }
      filterWordArr.splice(0, 1)
    }

    if (singleWordArr.length == 0 && filterWordArr.length === 0) {
      newArr.push(words[i])
    }
    
  }
  return newArr;
}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));