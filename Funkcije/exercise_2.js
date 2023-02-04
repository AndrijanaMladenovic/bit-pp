// 001
// Write a function to check whether the `input` is a string or not.

function checkInputIsString(inp) {
  result = true;
  if (typeof inp === "string") {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(checkInputIsString(12));

// 002
// Write a function to check whether a string is blank or not.

function stringBlanck(str) {
  var result = true;
  var string = str.toString();
  if (string === " ") {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(stringBlanck("My random string"));

// 003
//Write a function that concatenates a given string n times (default is 1).

function stringNumber(str = "", n) {
  var arr = [str];
  var i = 1;
  while (i < n) {
    arr.push(arr[0]);
    i++;
  }

  return arr.join("");
}

console.log(stringNumber("Ha!", 4));

// 004
//Write a function to count the number of letter occurrences in a string.

function countNumberOfLetters(str, letters) {
  var count = 0;
  var string = str.toString();
  for (var i = 0; i < string.length; i++) {
    a = string[i];
    if (letters == a) {
      count++;
    }
  }
  return count;
}
console.log(countNumberOfLetters("andrijannna", "n"));

// 005
// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

a = [];
function findPosition(str, character) {
  var string = str.split("");
  a.push(string);

  for (var i = 0; i < a[0].length; i++) {
    var element = a[0][i];

    if (element === character) {
      var index = i + 1;
      return index;
    }
  }
}
console.log(findPosition("dasdasd", "a"));

// 006
// ISTO SAMO OBRNUT RED U RECENICI

a = [];
function findPosition(str, character) {
  var string = str.split("").reverse();
  a.push(string);

  for (var i = 0; i < a[0].length; i++) {
    var element = a[0][i];

    if (element === character) {
      var index = i + 1;
      return index;
    }
  }
}
console.log(findPosition("das", "a"));

// 007
//  Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

var b = [];
function stringToArray(str) {
  for (i = 0; i < str.length; i++) {
    var element = str[i];
    if (element === " ") {
      element = null;
    }
    b.push(element);
  }
  return b;
}
console.log(stringToArray("My random string"));

// 008
// Write a function that accepts a number as a parameter and checks if the number is prime or
// not.

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(4));

// 009
// Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

function hasWhiteSpace(s, seperator) {
  if (s.includes(" ") && seperator == "_" && seperator == "+") {
    return s.replace(" ", seperator);
  } else {
    return s.replace(" ", "-");
  }
}
console.log(hasWhiteSpace("ahslk dalks", ","));

// 010
// Write a function to get the first n characters and add “...” at the end of newly created string.

function add(n) {
  return n + "....";
}
console.log(add("nummm"));

// 011
// Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

function convertStringToNumber() {
  var a = ["1", "21", undefined, "42", "le+3", Infinity];
  return a.filter(Number);
}
console.log(convertStringToNumber());

// 012
// Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retirementMen(birthYear, gender) {
  var age = 2022 - birthYear;
  var message = "";
  if (age < 65 && gender === "man") {
    var ageToRetirement = 65 - age;
    var message = `You need ${ageToRetirement} years to retirement`;
    return message;
  } else if (age < 60 && gender === "women") {
    var ageToRetirement = 60 - age;
    var message = `You need ${ageToRetirement} years to retirement`;
    return message;
  } else {
    message = `You are retired`;
    return message;
  }
}

console.log(retirementMen(1968, "man"));

// 013
// Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanize(number) {
  if (number % 100 >= 11 && number % 100 <= 13) return number + "th";

  switch (number % 10) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
  }

  return number + "th";
}
console.log(humanize(1));
console.log(humanize(2));
console.log(humanize(4));
