Math.roundTo = function (number, precision) {
  // TODO: Program Me
  const fac = Math.pow(10, precision);
  return Math.round(number * fac) / fac;
};
