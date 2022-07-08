// console.log("object");

function whatIsInAName(collection, source) {
  let keyEl = Object.keys(source);

  return collection.filter((item) => {
    for (let i = 0; i < keyEl.length; i++) {
      const element = keyEl[i];
      if (!item.hasOwnProperty(element) || item[element] !== source[element]) {
        return false
      } 
    }
    return true
  })
}



console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))