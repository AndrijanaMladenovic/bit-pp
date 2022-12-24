// 001
// Write a functional expression that duplicates each element of a given array.

function duplicates(array) {
  if (!array || typeof array == "string") {
    return [];
  }
  var dup = [];
  for (var i = 0; i < array.length; i++) {
    dup.push(array[i], array[i]);
  }
  return dup;
}

console.log(duplicates([2, 4, 7, 11, -2, 1]));

// 002
// Write a functional expression that removes all duplicates in a given array.

function deleteDuplicates(arr = []) {
  var newArr = [...new Set(arr)];
  return newArr;
}
console.log(deleteDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// 003
// a) Write a function that checks if a given array has odd number of elements.

function oddNumber(array) {
  if (!array || typeof array == "string") {
    return [];
  }
  var result = true;
  if (array.length % 2 == 0) {
    result = false;
  }
  return result;
}
console.log(oddNumber([1, 2, 9, 2]));

// 003
// b Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.

function countsNumber(array) {
  var indexMiddleElement = (array.length - 1) / 2;
  var middleElement = array[indexMiddleElement];
  var count = 0;
  if (!array || !oddNumber(array) || typeof array == "string") {
    return oddNumber(array);
  }
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] < middleElement) {
      count++;
    }
  }

  return count;
}

console.log(countsNumber([-1, 8.1, 3, 6, 2.3, 44]));

// 004
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.

function smallestElement(array) {
  var min = 0;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < min) {
      var minValue = element;
    }
    var minLastIndex = array.lastIndexOf(minValue);
  }
  return { minValue, minLastIndex };
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

// 005
// a) Write a function that finds all the elements in a given array less than a given
// element.

function elementLess(array, num) {
  var b = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < num) {
      b.push(element);
    }
  }
  return b;
}

console.log(elementLess([2, 3, 8, -2, 11, 4], 6));

// b)
// Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.

function elementStart(array, str) {
  var b = [];
  var lowerStr = str.toLowerCase();

  for (var i = 0; i < array.length; i++) {
    var element = array[i].toLowerCase();
    if (element.startsWith(lowerStr)) {
      b.push(array[i]);
      continue;
    } else {
      return "No one !";
    }
  }
  return b;
}
console.log(
  elementStart(["JavaScript", "Programming", "fun", "product"], "ct")
);

// c)
// Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filterElement(array, str) {
  return elementStart(array, str);
}

console.log(
  filterElement(["JavaScript", "Programming", "fun", "product"], "ja")
);

// 6
// a) Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product.

function listOfProduct(array = {}) {
  var sum = 0;
  var avgSum = 0;
  var maxPrice = array[0].price;
  console.log(array[0].price);
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    sum += element.price;
    var price = array.length;

    console.log(element.price);
    console.log(sum);
    if (element.price > maxPrice) {
      var mostExpensiveProduct = element.price;
      console.log(element.name);
      var mostExpensiveProductName = element.name.toUpperCase();
    }
  }

  avgSum = sum / price;
  return `pod a) total price : ${sum} , b)avg price : ${avgSum.toFixed(
    3
  )} , d) name od the most expensive product :${mostExpensiveProductName}`;
}

console.log(
  listOfProduct([
    { name: "apples", price: 180 },
    { name: "milk", price: 200 },
    { name: "bananas", price: 300 },
  ])
);

// 007
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

// 1

function checksCapitals(string) {
  if (typeof string !== "string") {
    return "fail";
  }
  var result = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toUpperCase()) {
      result = false;
    }
  }
  return result;
}

console.log(checksCapitals("AnDRIJANA"));

// 2

function chacksDigits(string) {
  for (var i = 0; i < string.length; i++) {
    if (Number(string[i])) {
      return true;
    }
  }
  return result;
}
console.log(chacksDigits("ada2n"));

// 3

function isValidHexaCode(str) {
  if (str[0] != "#") return false;

  if (!(str.length == 4 || str.length == 7)) return false;

  for (var i = 1; i < str.length; i++)
    if (
      !(
        (str[i].charCodeAt(0) <= "0".charCodeAt(0) &&
          str[i].charCodeAt(0) <= 9) ||
        (str[i].charCodeAt(0) >= "a".charCodeAt(0) &&
          str[i].charCodeAt(0) <= "f".charCodeAt(0)) ||
        str[i].charCodeAt(0) >= "A".charCodeAt(0) ||
        str[i].charCodeAt(0) <= "F".charCodeAt(0)
      )
    )
      return false;

  return true;
}

console.log(isValidHexaCode("#1AFFa"));

// 004

function numberBelongInterval(str) {
  var num = Number(str);
  console.log(num);
  if (isNaN(num)) {
    return false;
  }

  if (num >= 1900 && num <= 2018) {
    return true;
  }
  return false;
}
console.log(numberBelongInterval("3000"));

function validator(str) {
  var obj = {
    stringValidator: checksCapitals(str),
    passwordValidator: chacksDigits(str),
    colorValidator: isValidHexaCode(str),
    yearValidator: numberBelongInterval(str),
  };
  return obj;
}
console.log(validator("asd1ads"));

// 008
// Write a function that calculates a number of days to your birthday.

function bithday(days, month, years) {
  var myBirthday = [days, month, years];
  var today = new Date();
  var thisYear = new Date().getFullYear() + 1;
  var bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }

  var bYears = years;
  var godine = thisYear - bYears;

  diff = bday.getTime() - today.getTime();
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days + 1} days until your ${godine} Birthday !`;
}

console.log(bithday(21, 10, 1995));

// 009
// Write a function that for a given departure and arrival time calculates the time the trip
// takes.

function time(start, end) {
  var now = start.split(":");
  var end = end.split(":");
  console.log(now[0], now[1], now[2]);
  var startDate = new Date(0, 0, 0, now[0], now[1], now[2], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], end[2], 0);
  console.log(endDate);

  var hours = endDate.getHours() - startDate.getHours();
  console.log(hours);
  if (startDate.getMinutes() > endDate.getMinutes()) {
    var minutes = startDate.getMinutes() - endDate.getMinutes();
  } else {
    var minutes = endDate.getMinutes() - startDate.getMinutes();
  }
  if (startDate.getSeconds() > endDate.getSeconds()) {
    var seconds = startDate.getSeconds() - endDate.getSeconds();
  } else {
    var seconds = endDate.getSeconds() - startDate.getSeconds();
  }

  return `${hours} hours:${minutes} minutes:${seconds} seconds`;
}

console.log(time("8:22:13", "11:43:22"));

// 010
// Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function Space(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
var obj = new Space(3, 5, 1);
console.log(obj);

var obj2 = new Space(4, 2, 5);

function random(obj, obj2) {
  var disX = obj.x - obj2.x;
  var disY = obj.y - obj2.y;
  var disZ = obj.z - obj2.z;
  return `${disX},${disY},${disZ}`;
}

console.log(random(obj, obj2));

// 011
// a) Write a function that generates a random integer value between 5 and 20.

function randomIntFromInterval() {
  return Math.floor(Math.random() * 16) + 5;
}

console.log(randomIntFromInterval());

// b) Write a function that generates a random integer value between 50 and 100.

function randomIntFromInterval() {
  return Math.floor(Math.random() * 51) + 50;
}

console.log(randomIntFromInterval());

// C)

function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max);
  });
}

console.log(randomArray(5, 20));

//012
// Write a function that shuffles the elements of a given array.

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
