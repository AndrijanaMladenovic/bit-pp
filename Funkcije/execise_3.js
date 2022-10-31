// 001
// Write a program to insert a string within a string at a particular position (default is 1,
// beginning of a string).

function stringChange(str, text, n) {
  if (typeof n === "undefined") {
    return text + "  " + str;
  }
  return str.slice(0, n) + text + " " + str.slice(n);
}
console.log(stringChange("My random string", "js", 10));

// 002
// Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

function skippingElements(arr) {
  return arr.filter(Boolean);
}
console.log(
  skippingElements([NaN, 0, 15, false, -22, " ", undefined, 47, null])
);

// 003
// Write a program to filter out falsy values from the array.

function filterValues(arr) {
  return arr.filter(Boolean);
}
console.log(filterValues([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 004
// Write a function that reverses a number. The result must be a number.

function reverses(num) {
  return num.toString().split("").reverse().join("");
}
console.log(reverses(12345));

// 005
// Write a function to get the last element of an array. Passing a parameter 'n' will return the
// last 'n' elements of the array.

last = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// 006
// Write a function to create a specified number of elements with pre-filled numeric value
//array.

function specifiedNumber(a, b) {
  if (typeof b == "undefined") {
    b = null;
  }
  var arr = [b];
  var i = 1;
  while (i < a) {
    arr.push(arr[0]);
    i++;
  }
  return arr;
}
console.log(specifiedNumber(2));

// 007
// Write a function that says whether a number is perfect.

function perfectNumber(number) {
  var sum = 0;
  var message = " ";
  for (var i = 1; i <= number; i++) {
    var element = i;
    if (number % element == 0) {
      var deljiviBrojevi = element;
      sum += deljiviBrojevi;
    } else if (sum % number == 0) {
      message = "this number is perfect";
    } else {
      message = "this number is not perfect";
    }
  }
  return message;
}
console.log(perfectNumber(8128));

// 008
// Write a function to find a word within a string.

function findWord(string, randomString) {
  var count = 0;
  var message = "";
  var str = string.split(" ");

  for (var i = 0; i < str.length; i++) {
    var element = str[i];

    if (randomString == element) {
      var times = element;
      count++;
      message = `${randomString} was found ${count} times`;
    }
  }
  return message;
}

console.log(findWord("The quick brown fox", "fox"));
console.log(findWord("aa bb dd cc aa", "aa"));

// 009
//Write a function to hide email address.

function hideEmail(email) {
  var avg, splitted, part1, part2;
  splitted = email.split("@");
  part1 = splitted[0];
  part2 = splitted[1];
  avg = part1.length / 2;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splitted[1];
  return part1 + "...@" + part2;
}

console.log(hideEmail("myemailaddress@bgit.rs"));

// 010
// Write a program to find the most frequent item of an array.

function frequentItem(arr) {
  var count = 0;
  var mf = 1;
  var item;
  var message = "";
  for (var i = 0; i <= arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
      if (count > mf) {
        mf = count;
        item = arr[i];
        message = `${item},${count} times`;
      }
    }
    count = 0;
  }
  return message;
}

console.log(frequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
