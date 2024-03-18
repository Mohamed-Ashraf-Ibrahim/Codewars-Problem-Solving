/*
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"
*/

function gimmeTheLetters(sp) {
  let result = [];
  const start = sp.charCodeAt(0);
  const end = sp.charCodeAt(2);

  for (let i = start; i <= end; i++) {
    result.push(String.fromCharCode(i));
  }
  return result.join("");
}

console.log(gimmeTheLetters("a-z")); // output => abcdefghijklmnopqrstuvwxyz
