function shortcut(string) {
  let result = "";
  for (const i of string) {
    if (!"aeiou".includes(i)) {
      result += i;
    }
  }
  return result;
}
