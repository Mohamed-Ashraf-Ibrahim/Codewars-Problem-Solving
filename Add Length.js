function addLength(str) {
  //start-here
  const words = str.split(" ");
  // Map over the array of words and create a new array (len) where each element
  // consists of the original word followed by its length separated by a space.
  const len = words.map((word) => `${word} ${word.length}`);
  return len;
}
