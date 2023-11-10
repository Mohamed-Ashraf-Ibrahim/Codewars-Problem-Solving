function isPythagoreanTriple(integers) {
  // Good luck friends!
  integers.sort((num1, num2) => num1 - num2);
  const [num1, num2, num3] = integers;
  return Math.pow(num1, 2) + Math.pow(num2, 2) === Math.pow(num3, 2);
}
