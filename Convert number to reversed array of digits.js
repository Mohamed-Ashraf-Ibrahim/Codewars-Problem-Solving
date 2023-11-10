function digitize(n) {
  //code here
  const nString = n.toString();
  const nArr = nString.split("").reverse();
  return nArr.map((arr) => parseInt(arr));
}
