/*
https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
*/
function sum(numbers) {
  "use strict";
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
  // Another solution
  // return numbers.reduce((acc, curr) => acc + curr, 0);
}
