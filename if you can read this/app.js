// If you can read this...

// Task

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

function to_nato(words) {
  let letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let wordy = [
    'Alfa',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'Xray',
    'Yankee',
    'Zulu'
  ];

  let finalStr = ''

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    // console.log(element);
    let wordIndex = letters.indexOf(element.toLowerCase())

    // console.log(letters.indexOf(element.toLowerCase()));
    // console.log(wordIndex, wordy[16], letters[16], element);
    if (wordIndex >= 0) {
      finalStr += wordy[wordIndex] + ' '
    } else if (element == ' ') {
      finalStr += ''
    } else {
      finalStr += element + ' '
    }

    
  }


  return finalStr.slice(0, finalStr.length - 1);
}
// function to_nato(words) {
//   let newStr = [...words.split(' ')]
//   console.log(newStr);
// 	// Go code
//   let finalStr = ''

//   // console.log(newStr);
//   newStr.forEach(letter => {

//     // console.log(letter);
//     if (letter == ',' || letter == '.' || letter == '!' || letter == '?') {
//       finalStr += letter
//     } else {
//       finalStr += letter.charAt(0).toLowerCase()
//     }
//   })

//   return finalStr
// }

to_nato('If you can read')
