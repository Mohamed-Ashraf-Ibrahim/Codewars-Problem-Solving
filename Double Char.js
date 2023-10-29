function doubleChar(str) {
  // Your code here
  let result = '';
  
  for (let i = 0; i < str.length; i++){
    result += str[i] + str[i];
  }
  return result;
}