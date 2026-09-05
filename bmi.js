const weight = process.argv[2];
const height = process.argv[3];
console.log(weight, height);

function calculateBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(3);
}

console.log("My BMI: ", calculateBmi(weight, height));

if (calculateBmi <= 18) {
  console.log("Underweight, You need to improve for fit.");
} else if (calculateBmi <= 20) {
  console.log("Fit, You belong a good and healthy life.");
} else {
  console.log("Overweight, You need to diet.");
}
