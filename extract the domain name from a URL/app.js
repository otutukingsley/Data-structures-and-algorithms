// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url){
  let newStr = url.replace('http://', '')
  let httpsOut = newStr.replace('https://', '')
  let wwwOut = httpsOut.replace('www.', '')
 
  //your code here
  return wwwOut.slice(0, wwwOut.indexOf('.'))
}



console.log(domainName("https://google.com"));