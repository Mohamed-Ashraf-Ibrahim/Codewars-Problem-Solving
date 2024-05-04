// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
  //your code here
  let result = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}
