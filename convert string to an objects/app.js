// Create function to convert given string to the output below

// Input
const optionRule =
  "{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})"

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

function getOnlyNum(str) {
  let strArr = str.split("")

  strArr.forEach((item, index) => {
    if (item === "(" || item === ")" || item === "{" || item === "}") {
      strArr[index] = ""
    }
  })

  return Number(strArr.join(""))
}

function convertToObject(str) {
  let strArr = str.split("AND")
  let output = {}

  strArr.forEach((item, index) => {
    if (!item.includes("OR")) {
      let onlyNum = getOnlyNum(item)
      strArr[index] = onlyNum
    } else {
      let strArr2 = item.split("OR")
      let orObj = { or: [] }
      strArr2.forEach((item, index) => {
        let onlyNum = getOnlyNum(item)
        orObj.or.push(onlyNum)
      })
      strArr[index] = orObj
    }
  })

  output["and"] = strArr

  return output
}

console.log(convertToObject(optionRule))
