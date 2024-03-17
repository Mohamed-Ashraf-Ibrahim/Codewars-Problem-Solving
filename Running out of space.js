function spacey(array) {
  const result = [];
  let concatenated = "";

  for (let word of array) {
    concatenated += word;
    result.push(concatenated);
  }
  return result;
}

console.log(spacey(["i", "have", "no", "space"]));
