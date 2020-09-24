//Javascript Program for Finding Dog's age of User

// User Current age
const myAge = 20;

// Dog's Early 2 age period count as 10.5
let earlyYears = 2;

earlyYears *= 10.5;

// substracting 2 years from user age since, we accounted 2 years of dog's age.
let laterYears = myAge - 2;

// multiplying 4 with remaining user age to calculate its respective dog age
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// User Age in Dog's age
let myAgeInDogYears = earlyYears + laterYears;

console.log(myAgeInDogYears);

//assigning User name in myName variable in lower case 
const myName = "Raja".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`);