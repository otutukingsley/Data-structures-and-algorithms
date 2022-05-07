// Human Readable Time


// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
  let hourStr = (seconds / 3600).toString().split('.')[0]
  let hour = parseInt(hourStr) < 10 ? `0${hourStr}` : `${hourStr}` 
  let min, sec, secCount;
  if (seconds % 3600 == 0) {
    return `${hour}:00:00`
  } else {
    secCount = seconds % 3600
  }

  
  let minStr = (secCount / 60).toString().split('.')[0]
    min = parseInt(minStr) < 10 ? `0${minStr}` : `${minStr}` 

  if (secCount % 60 == 0) {
    return `${hour}:${min}:00`
  } else {
    secCount = secCount % 60 < 10 ? `0${secCount % 60}` : `${secCount % 60}`;

    return `${hour}:${min}:${secCount}`
  }
}


// humanReadable(59)

console.log(humanReadable(0));