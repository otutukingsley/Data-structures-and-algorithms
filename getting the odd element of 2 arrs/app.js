console.log("object");



// function diffArray(arr1, arr2) {
//   const newArr = [...arr1, ...arr2].filter(item => {
//     arr1.includes(item); 
//   });
//     console.log(newArr)
//   return newArr;
// }

// diffArray([1, 7, 3, 5], [1, 2, 3, 9, 5]);

// for (let i = 0; i < arr1.length; i++) {
//   const element = arr1[i];
//   if (!arr2.includes(element)) {
//     console.log(element, arr1);

//   }
  
// }

// let filterArr = arr2.filter(el => {
//   console.log(el, arr1)
//   return arr1.includes(el)
// })

// console.log(filterArr);









const arr1 = [1, 7, 3, 5],
      arr2 = [1, 2, 3, 9, 5];

let newArr = [...arr1, ...arr2];
let filterArr = newArr.filter(eachEl => {
 
  return !arr1.includes(eachEl) || !arr2.includes(eachEl)
})

console.log(filterArr);