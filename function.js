function total(price, quantity = 12) {
  const grandTotal = price * quantity;
  return grandTotal;
}

const spend = total(10);
const haveMoney = 250;
const saveMoney = haveMoney - spend;
console.log("Total Remaining Balance:", saveMoney);

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Rahim");
