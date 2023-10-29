function array(string) {
  // TODO
  const seq = string.split(",");
  if (seq.length <= 2) return null;
  seq.shift();
  seq.pop();
  return seq.join(" ");
}
