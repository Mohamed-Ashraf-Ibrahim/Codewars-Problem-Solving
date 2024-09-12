function printArray(array) {
  //show me the code!
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i !== array.length - 1) {
      result += ",";
    }
  }
  return result;
}
console.log(printArray(["h", "o", "l", "a"]));

// Array => ["h","o","l","a"]
// needed output => "h,o,l,a"
