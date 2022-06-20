console.log("first");


// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

// convertHTML("Schindler's List") should return the string Schindler&apos;s List.

// convertHTML("<>") should return the string &lt;&gt;.

// convertHTML("abc") should return the string abc.

function convertHTML(str) {

  let strArr = str.split('')

  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case '<' :
        strArr[i] = '&lt;'
        break;
      case '>' :
        strArr[i] = '&gt;'
        break;
      case '&' :
        strArr[i] = '&amp;'
        break;
      case '"' :
        strArr[i] = '&quot;'
        break;
      case "'" :
        strArr[i] = '&apos;'
        break;
         
      default:
        break;
    }
  }
  return strArr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));