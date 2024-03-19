/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers.
For an empty array return 0
Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
output: 5 
The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
  // Do your magic. :)
  let result = 0;
  for (let i = 0; i < collection.length; i++) {
    let count = 0;
    for (let x = 0; x < collection.length; x++) {
      collection[i] === collection[x] ? count++ : count;
    }
    count > result ? (result = count) : result;
  }
  return result;
}
