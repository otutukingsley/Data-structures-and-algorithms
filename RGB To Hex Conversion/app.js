// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  let newArr = Array.from(arguments);
  let rexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let newStr = '';

  newArr.forEach((num) => {
    if (num <= 0) {
      newStr += '00';
    } else if ((num / 16) >= 16) {
      newStr += 'FF'
    }else if ((num / 16) == 1) { 
      newStr += '10'
    } else {
      newStr += rexArr[Math.floor(num / 16)];


      let mudNum = (num / 16).toString().split('.')[1] === undefined ? '' : (num / 16).toString().split('.')[1];

      let appendNum = mudNum == '' ? 0 : Number(('0.' + mudNum))

      newStr += rexArr[Number(appendNum) * 16];
    }
  });

  return newStr;
}

console.log(rgb(250,39,235));
