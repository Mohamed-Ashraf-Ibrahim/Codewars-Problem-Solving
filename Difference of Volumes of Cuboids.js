function findDifference(a, b) {
  //loading...
  // solution #1
  // let volumeOfCubeA = a.reduce((acc, val) => acc * val, 1);
  // let volumeOfCubeB = b.reduce((acc, val) => acc * val, 1);
  // return volumeOfCubeA - volumeOfCubeB;

  return Math.abs(
    a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val, 1)
  );
}
console.log(findDifference([9, 7, 2], [5, 2, 2]));
