// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
  //return true or false
  if ((pin.length === 4 || pin.length === 6)  && /^\d+$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}