// var minRemoveToMakeValid = function (s) {
//   let counter = []
//   let strArr = s.split("")
//   let count = 0

//   // for (let i = 0; i < strArr.length; i++) {
//   //   let el = strArr[i]

//   // }

//   for (let i = 0; i < strArr.length; i++) {
//     if (count === 0 && strArr[i] === ")") {
//       strArr[i] = ""
//     } else if (strArr[i] === "(") {
//       count++
//       counter.push(i)
//     } else if (count > 0 && strArr[i] === ")") {
//       count--
//       counter.pop()
//     }

//     // console.log(counter, strArr)
//     // if (count >= strArr.length - i - 1 && strArr[i + 1] !== ")") {
//     //   if (strArr[i] === "(") {
//     //     strArr[i] = ""
//     //   } else {
//     //     strArr[counter[0]] = ""
//     //     counter.shift()
//     //   }
//     //   // strArr[i] = ""
//     // }
//   }

//   if (counter.length > 0) {
//     const str = strArr.filter((el, index) => !counter.includes(index))
//     return str.join("")
//   } else {
//     return strArr.join("")
//   }
// }

var minRemoveToMakeValid = function (s) {
  let counter = []
  let strArr = s.split("")
  let count = 0

  for (let i = 0; i < strArr.length; i++) {
    if (count === 0 && strArr[i] === ")") {
      strArr[i] = ""
    } else if (strArr[i] === "(") {
      count++
      counter.push(i)
    } else if (count > 0 && strArr[i] === ")") {
      count--
      counter.pop()
    }
  }

  if (counter.length > 0) {
    const str = strArr.filter((el, index) => !counter.includes(index))
    return str.join("")
  } else {
    return strArr.join("")
  }
}
