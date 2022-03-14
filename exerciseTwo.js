function ageCategory(birthYear) {
  let year = prompt("enter birth year..");

  let age = 2022 - year;

  if (age < 18) {
    console.log("minor");
  } else if (age >= 18 && age <= 36) {
    console.log("youth");
  } else {
    console.log("elder");
  }
}

ageCategory();
