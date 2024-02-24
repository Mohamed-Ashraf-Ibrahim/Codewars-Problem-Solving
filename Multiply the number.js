"use strict";

function multiply(number) {
  //your code here
  // Calculate the number of digits
  const len = String(Math.abs(number)).length;
  const multiplier = Math.pow(5, len);
  return number * multiplier; // Multiply the number by the multiplier
}
console.log(multiply(10));
