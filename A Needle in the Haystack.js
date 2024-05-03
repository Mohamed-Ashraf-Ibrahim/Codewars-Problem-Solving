//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i++){
    if (haystack[i] === 'needle'){
      return `found the needle at position ${i}`
    }
  }
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));