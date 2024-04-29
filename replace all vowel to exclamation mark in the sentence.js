/*https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript */
function replace(s) {
  //coding and coding....
  const vowel = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      result += "!";
    } else {
      result += s[i];
    }
  }
  return result;
}
console.log(replace("aeiou")); // output "!!!!!"
