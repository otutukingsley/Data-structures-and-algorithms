// Binary Agents

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {

  let binaryStr = str.split(' '),
      uniStr = [];

  for (let i = 0; i < binaryStr.length; i++) {
    const element = binaryStr[i];
    uniStr.push(String.fromCharCode(parseInt(element, 2)));
  }
  return uniStr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(binaryAgent("01010111 01101000 01100001 01110100 00100000 01101001 01110011 00100000 00110010 00101011 00110011 00111111"));
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));