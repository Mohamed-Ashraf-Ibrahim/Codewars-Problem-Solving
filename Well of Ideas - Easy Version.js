/*https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript*/
"use strict";
function well(x) {
  let goodCount = 0;
  x.forEach((idea) => {
    if (idea === "good") {
      goodCount++;
    }
  });

  if (goodCount === 0) {
    return "Fail!";
  } else if (goodCount <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
console.log(well(["bad", "bad", "bad"])); // Fail!
console.log(well(["good", "bad", "bad", "bad", "bad"])); // Publish!
