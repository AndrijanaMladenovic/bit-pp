// 001
// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var array = (function (arr) {
  var last = arr[arr.length - 1];
  var one = arr[0];
  arr[0] = last;
  arr[arr.length - 1] = one;
  return arr;
})([4, 5, 11, 9]);
console.log(array);

// 002
//Write IIFE that calculates the surface area of the given rectangle with sides a and b.

var surface = (function (a, b) {
  return a * b;
})(5, 4);
console.log(surface);
// 003
//Write IIFE that replaces all appearances of the letters m or M with * and returns the
//number of replacements.
// Input: prograMming
// Output: progra**ing, 2

var string = (function (str) {
  var count = 0;
  var result = "*";
  var string = str.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    console.log(letter);
    if (letter === "m") {
      count++;
    }
  }
  var m = /m/gi;
  var newStr = str.replace(m, "*");
  return `${newStr} ${count}`;
})("prograMming");
console.log(string);

// 004
// Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.

var nameSurname = function (name, surname) {
  return function email(mail) {
    return `${name}.${surname}@gmail.com`;
  };
};

var result = nameSurname("andrijana", "mladenovic");
var result2 = result();
console.log(result2);

// 005
// Write a function that returns a function that calculates a decimal value of the given octal
// number.

var octal = function (num) {
  return function number() {
    return num;
  };
};

var result = octal(034);
var result2 = result();
console.log(result2);

/// 006
// Write a function that checks if a given string is valid password.

var password = function (password) {
  for (var i = 0; i < password.length; i++);
  if (password.length > 6 && !Number(password[i])) {
    return function successCallback() {
      return `Your password is cool !`;
    };
  } else {
    return function errorCallback() {
      return `Your password is invalid !`;
    };
  }
};

var result = password("jsguru3");
var result2 = result();
console.log(result2);
// 007
// Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.

var oddNumber = function (arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      b.push(arr[i]);
    }
  }
  return function array() {
    return b;
  };
};

var result = oddNumber([2, 8, 11, 4, 9, 3]);
result2 = result();
console.log(result2);
