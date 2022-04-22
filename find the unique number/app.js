// Find the unique number


// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:


function findUniq(arr) {

  let firstArr = arr[0]
  let filterArr = []
  let uniqueArr = []

  arr.forEach(element => {
    if (firstArr == element) {
      filterArr.push(element)
    } else {
      uniqueArr.push(element)
    }
  });

 return uniqueArr.length > filterArr.length ? filterArr[0] : uniqueArr[0]
}


// findUniq([ 2, 1, 1, 1, 1, 1 ])

console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));