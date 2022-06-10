function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let element = str.charCodeAt(i);  
    console.log(element, str.charCodeAt(0) + i, i);
    if (element !== str.charCodeAt(0) + i) {
      return String.fromCharCode(element - 1);
    }
  }
  return undefined;
}

// fearNotLetter("abce");
console.log(fearNotLetter("abce"));