function addLength(str) {
  //start-here
  return str.split(" ").map((word) => `${word} ${word.length}`);
}
