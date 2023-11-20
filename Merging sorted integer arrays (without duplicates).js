function mergeArrays(a, b) {
  // your code here
  let arr = [a, b];
  // Create a new array containing unique elements by flattening the input arrays (arr),
  // using a Set to automatically remove duplicates, and converting it back to an array.
  let uniqueArr = Array.from(new Set(arr.flat()));
  return uniqueArr.sort((a, b) => a - b);
}
