// Project --- >> Race Day
// Change runner age & registration values for different Combinations

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18;

if (registeredEarly && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
console.log(`${raceNumber} will race at 9.30 am`);
}
else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`${raceNumber} will race at 11.00 am`);
}
else if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12.30 pm`);
}