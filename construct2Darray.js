var construct2DArray = function(original, m, n) {
  if(original.length !== (m * n)) return []

  let result = []
  let ref = []

  for(let i = 0; i < original.length; i++){
      ref.push(original[i])

      if(ref.length === n){
          result.push(ref)
          ref = []
      }
  }

  return result
};