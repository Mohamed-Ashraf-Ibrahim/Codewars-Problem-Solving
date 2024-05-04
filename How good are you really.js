function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let result = 0;

  for (let i = 0; i < classPoints.length; i++) {
    result += classPoints[i];
  }
  let numbersOfPerPoints = classPoints.length;
  let myTotalPoints = yourPoints;
  let averagePerPoints = result / myTotalPoints;
  return numbersOfPerPoints > averagePerPoints;
}
