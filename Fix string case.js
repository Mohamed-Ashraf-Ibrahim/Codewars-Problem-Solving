function solve(s) {
  //..
  let countUpperCase = 0;
  let countLowerCase = 0;

  for (let char of s) {
    if (char === char.toUpperCase()) {
      countUpperCase++;
    } else if (char === char.toLowerCase()) {
      countLowerCase++;
    }
  }
  if (countLowerCase >= countUpperCase) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

