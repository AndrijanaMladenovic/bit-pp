//001
// Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.

function convertArrToNumber(arr) {
  var b = [];

  for (var i = 0; i < arr.length; i++) {
    var number = parseFloat(arr[i]);
    console.log(number);
    if (!isNaN(number) && isFinite(number)) {
      b.push(Number(arr[i]));
    }
  }

  return b;
}
console.log(convertArrToNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

// 002
// Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

function join(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = parseInt(arr[i]);
    if (!isNaN(element)) {
      b.push(element);
    } else if (typeof arr[i] === "boolean") {
      b.push(arr[i]);
    }
  }
  return b.join("");
}

console.log(join([NaN, 0, 15, false, -22, " ", undefined, 47, null]));

// 003
// Write a program to filter out falsy values from the array.

function falsy(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (typeof element == "number" && element !== 0 && !isNaN(element)) {
      b.push(element);
    }
  }
  return b;
}

console.log(falsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//004
// Write a program that calculates a number of integer values in the array.

function calculate(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if ((isNumber = element) && Number.isInteger(element)) {
      b.push(element);
    }
  }
  return b.length;
}
console.log(calculate([NaN, 23.1, 15, false, -22.5, " ", 4, 7, null]));

//005
// Write a program that calculates a number of float values in the array.

function calculate(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (
      (isNumber = element) &&
      !Number.isInteger(element) &&
      typeof element == "number"
    ) {
      b.push(element);
    }
  }
  return b.length;
}
console.log(calculate([NaN, 23.1, 15, false, -22.5, " ", 4, 7, null]));
