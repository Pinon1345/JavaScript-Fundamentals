const total = (salePrice, expenses = 45) => {
  const grandProfit = salePrice - expenses;
  return grandProfit;
};

const marginal = total(78);
console.log("Emni: ", marginal);

const add = (a, b, c) => a + b - c;
const calculation = add(13, 8, 7);
console.log("The Calculation: ", calculation);
