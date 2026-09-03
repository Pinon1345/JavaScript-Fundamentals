let age = 18;

if (age >= 18) {
  console.log("Eligible for giving Vote");
} else {
  console.log("Not eligible for giving Vote");
}

let marks = 93;

if (marks >= 80) {
  console.log("This is grate A+");
} else if (marks >= 70) {
  console.log("This is grate A");
} else if (marks >= 60) {
  console.log("This is grate A-");
} else if (marks >= 50) {
  console.log("This is grate B");
} else if (marks >= 40) {
  console.log("This is grate C");
} else {
  console.log("This is grate F");
}

let products = 87;

switch (true) {
  case products >= 90:
    console.log("Maybe Later");
    break;

  case products >= 80:
    console.log("Don't wanna purchase it");
    break;

  default:
    console.log("Wanna Purchase it");
    break;
}

let roll = 17;

switch (true) {
  case roll <= 10:
    console.log("They are Good Student");
    break;

  case roll <= 20:
    console.log("They are Fair Student");
    break;

  default:
    console.log("They are Dull Student");
    break;
}

let ejpQualified = 56;

switch (true) {
  case ejpQualified <= 60:
    console.log("They are disqualified for EJP");
    break;
  case ejpQualified <= 70:
    console.log("They are in selection list");

  default:
    console.log("They are qualified for EJP");
    break;
}

// Ternary operator condition ? true : false;

let newAge = 15;

newAge >= 18 ? console.log("Eligible for Vote") : console.log("Not eligible for Vote");

let heIs = "Mahim";
heIs === "Rahim" ? console.log("My Friend") : console.log("Not My Friend");
