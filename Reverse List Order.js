// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
function reverseList(list) {
  let reversedArr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedArr.push(list[i]);
  }
  return reversedArr;
}
