/*
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
*/
function openOrSenior(data) {
  // ...
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let age = data[i][0];
    let handicap = data[i][1];
    age >= 55 ? (handicap > 7 ? result.push('Senior') : result.push('Open')) : result.push('Open');
  }
  return result;
}
