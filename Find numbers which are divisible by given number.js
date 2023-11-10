function divisibleBy(numbers, divisor) {
  let result = [];
  for (let num of numbers) {
    if (num % divisor == 0) result.push(num);
  }
  return result;
}
