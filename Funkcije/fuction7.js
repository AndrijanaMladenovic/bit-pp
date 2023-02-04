// 001
// Write a function named tellFortune that:

function tellFortune(jobTitle, geoLocation, partner, numKids) {
  var future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    numKids +
    " kids.";
  console.log(future);
}

tellFortune("ball player", "spain", "Shaq", 3);
tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);

// 002
// Write a function named calculateDogAge that:

function calculateDogAge(age) {
  var dogAge = age * 7;
  return `Your doggie is ${dogAge} years old in dog years !`;
}
console.log(calculateDogAge(8));

function calculateHumenAge(dogAge, humanAge) {
  var age = dogAge * 7;
}

// 003
// Write a function named calculateSupply that:
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = numPerDay * 365 * (maxAge - age);
  var message =
    "You will need " +
    totalNeeded +
    " cups of tea to last you until the ripe old age of " +
    maxAge;
  console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

// 004
// Create a function called celsiusToFahrenheit:

function celsiusToFahrenheit(celsius) {
  var caluculate = (celsius / 5) * 9 + 32;
  var message = celsius + "celsius is" + caluculate + "Fahrenheit";
  console.log(message);
}
celsiusToFahrenheit(50);

// 004 b

function fahrenheitToCelsius(fahrenheit) {
  var caluculate = ((fahrenheit - 32) * 5) / 9;
  var message = fahrenheit + "fahrenheit is" + caluculate + "Celsius";
  console.log(message);
}
fahrenheitToCelsius(100);

// 005
// Create a function that validates a password to conform to the following rules:

function validates(password) {
  var result = "";
  var count = 0;
  for (var i = 0; i < password.length; i++) {
    if (password.length >= 6 && password.length < 24) {
      result = true;
    }
    if (password[i].toLowerCase() === password) {
      result = false;
    }
    var num = Number(password[i]);
    if (isNaN(num)) {
      result = `you need number`;
    }
    for (j = 0; j < password.length; j++) {
      if (i !== j)
        if (password[i] === password[j]) {
          count++;
          break;
        }
    }

    if (count > 2) {
      result = false;
    }
  }
  console.log(password);

  return result;
}

console.log(validates("iLoveYou"));

// 006
// Create a function that finds how many prime numbers there are, up to the given integer.

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
function primeNumber(str) {
  var prime = [];
  for (var i = 2; i < str; i++) {
    if (isPrime(i)) prime.push(i);
  }
  return `${prime.length} numbers this number is prime ${prime}`;
}

console.log(primeNumber(15));

//007
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.
function fillArray(result, i) {
  for (var j = 1; j <= i; j++) {
    result.push(i);
  }
}
function diamondArrays(num) {
  var result = [];
  for (var i = 1; i <= num; i++) {
    fillArray(result, i);
    for (var j = 1; j <= i; j++) {
      result.push[i];
    }
  }

  return result;
}

console.log(diamondArrays(5));
