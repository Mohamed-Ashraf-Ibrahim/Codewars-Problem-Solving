// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
function remove(string) {
  //coding and coding....

  if (string.endsWith("!")) {
    return string.slice(0, -1);
  } else {
    return string;
  }
}
