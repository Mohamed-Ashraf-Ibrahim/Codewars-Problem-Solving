function addLength(str) {
  //start-here
  const words = str.split(" ").map((word) => `${word} ${word.length}`);
  return words;
}
