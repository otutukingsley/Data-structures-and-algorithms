function uniteUnique(agu) {
  let arr = Array.from(arguments),
  result = [];
 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!result.includes(arr[i][j])) {
        result.push(arr[i][j])
        console.log(result);
      }
    }    
  }
  return result
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);