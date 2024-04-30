// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(d) {
  // Your solution here
  const costPerDay = 40;
  let discount = 0;

  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  }
  const totalCost = d * costPerDay;
  const finalCost = totalCost - discount;
  return finalCost;
}
