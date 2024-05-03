function countPositivesSumNegatives(input) {
  // your code here

  if (!input || input.length === 0) {
    return [];
  }
  
  let positiveCount = 0;
  let negativeSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else {
      negativeSum += input[i];
    }
  }
  return [positiveCount, negativeSum];
}
);
