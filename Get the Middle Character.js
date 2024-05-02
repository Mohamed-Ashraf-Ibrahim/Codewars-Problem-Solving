function getMiddle(s) {
  //Code goes here!
  let middleChar = "";
  let middleIndex = Math.floor(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    if (i === middleIndex && s.length % 2 === 1) {
      middleChar = s[i];
      break;
    }

    if ((i === middleIndex - 1 || i === middleIndex) && s.length % 2 === 0) {
      middleChar += s[i];
    }
  }
  return middleChar;
}
console.log(getMiddle("middle"));
