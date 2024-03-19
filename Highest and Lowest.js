/*
https://www.codewars.com/kata/554b4ac871d6813a03000035
*/
function highAndLow(numbers) {
  // ...
  numbers = numbers.split(" ").map(Number);
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } else if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return `${max} ${min}`;
}
