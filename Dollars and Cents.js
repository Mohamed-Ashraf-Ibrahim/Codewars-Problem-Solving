function formatMoney(amount){
  // your formatting code here
  let num = parseFloat(amount).toFixed(2);
  return `$${num}`;
}