/*   https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript  */
function evenNumbers(array, number) {
  let result = [];
  let count = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
      count++;
    }
    if (count === number) break;
  }
  return result.reverse();
}
