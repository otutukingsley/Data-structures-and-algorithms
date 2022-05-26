// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


function steamrollArray(arr) {
  let flattenArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      flattenArr.push(...steamrollArray(element))
    } else {
      flattenArr.push(element)
    }
  }

  return flattenArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
