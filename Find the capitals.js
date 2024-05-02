// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
var capitals = function (word) {
  // Write your code here
  let capChar = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      capChar.push(i);
    }
  }
  return capChar;
};
