// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = (arr) => {
  // your code
  let binaryResult = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const exponent = arr.length - 1 - i;

    if (arr[i] === 1) {
      binaryResult += Math.pow(2, exponent);
    }
  }
  return binaryResult;
};
console.log(binaryArrayToNumber([1, 1, 1, 1]));
