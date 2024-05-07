function reverseLetter(str) {
  //coding and coding..
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str[i].match(/[a-zA-Z]/) ? (result += str[i]) : str[i];
  }
  let reversedChr = result.split("").reverse().join("");
  return reversedChr;
}

console.log(reverseLetter("ultr53o?n"));
