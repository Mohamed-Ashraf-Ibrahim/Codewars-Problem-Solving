// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
  // your code here
  array.length === 0 ? 0 : false;
  let sum = array.reduce((acc, num) => acc + num, 0);
  const avg = sum / array.length;
  return avg;
}
