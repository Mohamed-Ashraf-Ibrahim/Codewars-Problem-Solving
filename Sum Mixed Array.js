// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += parseInt(x[i]);
  }
  return result;
}
