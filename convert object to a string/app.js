// Mood interview

// using JavaScript, convert the following array;

// ["OR", ["<","a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]

// to

// "a < b OR (c == d AND e != f)"

function convertToString(params) {
  let copy = [...params]
  let count = 0

  function redorderLevelTwo(arr) {
    let copy = [...arr]

    copy[0] = arr[1]
    copy[1] = arr[0]

    if (count === 0) {
      copy = ["(", ...copy]
    } else {
      copy = [...copy, ")"]
    }

    count++

    return copy
  }

  function redorderLevelOne(arr) {
    let copy = [...arr]

    arr.forEach((item, index, arrArray) => {
      if (typeof item === "string" && index === 0) {
        copy[index] = arrArray[index + 1]
        copy[index + 1] = arrArray[index]
      } else if (typeof item === "object") {
        let reordered = redorderLevelTwo(item)
        copy[copy.indexOf(item)] = reordered
      }
    })

    return copy
  }

  params.forEach((item, index, paramsArray) => {
    if (typeof item === "string" && index === 0) {
      copy[index] = paramsArray[index + 1]
      copy[index + 1] = paramsArray[index]
    } else if (typeof item === "object") {
      let reordered = redorderLevelOne(item)
      copy[copy.indexOf(item)] = reordered
    }
  })

  return copy.flat(2).join(" ")
}

convertToString([
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
])

// "a < b OR (c == d AND e != f)"

// Create function to convert given string to the output below
