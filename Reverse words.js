function reverseWords(str) {
  // Go for it
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      reversed += str[i];
    }
  }
  return reversed;
}
