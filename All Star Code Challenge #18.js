/*
https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
*/
function strCount(str, letter) {
  //code here
  // 1) initialize a variable to store the count of occurrences
  let count = 0;
  // 2) Iterate through each character in input string
  for (let i = 0; i < str.length; i++) {
    // 3) For each character, check if it matches the provided character.
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
