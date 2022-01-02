console.log("object");


function destroyer(arr) {
  let obj = Array.from(arguments).splice(1);
  let indexArr = arr.filter((eachEl) => {
    return !obj.includes(eachEl);
  });
  return indexArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
