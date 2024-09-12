function reverse(string) {
  //your code here
  let words = string.split(" ");
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " ";
  }
  return result;
}
console.log(reverse("Hello World"));

// input =>"Hello World"
// output => "World Hello"
