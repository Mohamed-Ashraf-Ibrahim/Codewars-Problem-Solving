// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  // code away

  let result = name.split(" ");

  let firstInitial = result[0].charAt(0).toUpperCase();
  let secondInitial = result[1].charAt(0).toUpperCase();

  let initials = `${firstInitial}.${secondInitial}`;
  return initials;
}
