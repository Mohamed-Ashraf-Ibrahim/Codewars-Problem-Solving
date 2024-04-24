/*https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript*/
function cockroachSpeed(s) {
  //Good Luck!
  const meterPerSeconds = s * (1000 / 3600);
  const cmPerSeconds = Math.floor(meterPerSeconds * 100);
  return cmPerSeconds;
}
console.log(cockroachSpeed(1.08)); // output = 30
