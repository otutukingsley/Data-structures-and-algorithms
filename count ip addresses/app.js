// Count IP Addresses

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  let startArr = [...start.split('.')].map((x) => parseInt(x));
  let endArr = [...end.split('.')].map((x) => parseInt(x));

  let ansArr = Math.abs(
    startArr
      .map((x, index) =>
        x == endArr[index]
          ? 0
          : (x - endArr[index]) * Math.pow(256, endArr.length - 1 - index)
      )
      .reduce((a, b) => a + b)
  );

  return ansArr;
}

console.log(ipsBetween('10.11.12.13', '10.11.13.0'));
