// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
function toCsvText(array) {
  // good luck
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i].join(",") + "\n";
  }
  if (result.length > 1) {
    result = result.slice(0, -1);
  }
  return result;
}
