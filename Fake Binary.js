function fakeBin(x) {
  let result = "";
  for (const n of x) {
    if (parseInt(n) < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}
