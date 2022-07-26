// Network Checker
// an Object with an array of the substrings of each network
// Inputed number

let networks = {
  mtn: ["0803", "0703", "0903", "0806", "0706", "0813", "0810", "0814", "0816"],
  airtel: ["0802", "0902", "0701", "0808", "0708", "0812"],
  global: ["0805", "0705", "0905", "0807", "0811", "0815", "0905"],
  etisalat: ["0809", "0909", "0817", "0818"],
}

function networkCheck(number) {
  let allNetworks = { ...networks }
  let network = ""

  for (let key in allNetworks) {
    for (let i = 0; i < allNetworks[key].length; i++) {
      if (number.includes(allNetworks[key][i])) {
        network = key
      }
    }
  }

  return network
}

networkCheck("07056471853")
