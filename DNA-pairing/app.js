console.log("object");


// AT and CG.

function pairElement(str) {
   let strArr = str.split(''),
      pairedArr = [];

  strArr.forEach(element => {
    switch (element) {
      case 'A':
        pairedArr.push(['A', 'T'])
        break;
      case 'T':
        pairedArr.push(['T', 'A'])
        break;
      case 'C':
        pairedArr.push(['C', 'G'])
        break;
      case 'G':
        pairedArr.push(['G', 'C'])
        break;  
      default:
        break;
    }
  });
  return pairedArr;
}

console.log(pairElement("GCG"))