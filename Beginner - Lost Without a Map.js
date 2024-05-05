function maps(x) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}

console.log(maps([1, 2, 3]));
