/*
https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/javascript
*/
function flickSwitch(arr) {
  // 1) Create an empty array to store the result
  let result = [];
  //2)Initialize a switch flag to keep track of the state
  let switchFlag = false;

  // 3) Loop through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // 4) Check if the current element is equal to "flick"
    if (arr[i] === "flick") {
      switchFlag = !switchFlag;
      // 5) If the current element is "flick", push switchflag into the result array
      result.push(!switchFlag);
      // 6) If the current element is not "flick", push switchflag current value into the result array
    } else {
      result.push(!switchFlag);
    }
  }
  return result;
}
