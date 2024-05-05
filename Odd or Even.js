// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
  //enter code here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  return sum;
}

