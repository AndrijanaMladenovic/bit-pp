// 001
// Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.

function switchPlaces(arr) {
  var min = arr[0];
  var max = arr[1];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (element <= min) {
      var min2 = element;
    }
    if (element >= max) {
      var max2 = element;
    }
  }
  var src = arr.indexOf(min2);
  var des = arr.indexOf(max2);
  var temp = arr[src];
  arr[src] = arr[des];
  arr[des] = temp;
  return arr;
}

console.log(switchPlaces([3, 500, 12, 149, 53, 414, 1, 19]));

// 002
// Use the following array to make a new one by dividing its values by two and adding 5. If
// a given elements value is 0, change it to 20.

function newArr(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    var c = element / 2 + 5;
    b.push(c);
    if (b[i] == 0) {
      b[i] = 20;
    }
  }
  return b;
}
console.log(newArr([3, 500, -10, 149, 53, 414, 1, 19]));

//003
// Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:

function students(arr, name) {
  for (var i = 0; i < arr.length; i++) {
    var bodovi = arr[i];
    if (bodovi < 51) {
      var result = "fail";
    }
    if (bodovi > 60 && bodovi <= 70) {
      var ocena = 7;
    }
    if (bodovi > 70 && bodovi <= 80) {
      var ocena = 8;
    }
    if (bodovi > 80 && bodovi <= 90) {
      var ocena = 9;
    }
    if (bodovi > 90 && bodovi <= 100) {
      var ocena = 10;
    }
  }
  switch (name) {
    case "michael":
      var result = `michael acquired ${arr[0]} and ${result} to complete the exam `;
      break;
    case "anne":
      var result = `anne acquired ${arr[1]} and ${result} to complete the exam `;
      break;
    case "frank":
      var result = `frank acquired ${arr[2]} and ${result} to complete the exam `;
      break;
    case "joe":
      var result = `joe acquired ${arr[3]} and ${result} to complete the exam `;
      break;
    case "john":
      var result = `john acquired ${arr[4]} and ${result} to complete the exam `;
      break;
    case "david":
      var result = `david acquired ${arr[5]} and ${result} to complete the exam `;
      break;
    case "mark":
      var result = `mark acquired ${arr[6]} and ${result} to complete the exam `;
      break;
    case "bill":
      var result = `bill acquired ${arr[7]} and ${result} to complete the exam `;
      break;
  }
  return result;
}
console.log(students([50, 39, 63, 72, 99, 51, 83, 59], "anne"));

// 004
// :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.

function newArr(arr) {
  var b = [];

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    b.push(element * 2);
  }
  var min = b[0];

  return b.sort((a, b) => a - b);
}

console.log(newArr([13, 11, 15, 5, 6, 1, 8, 12]));

// 005
// Sort a previously defined array in a descending order and display it in the
// console.

function sortArr(arr) {
  return arr.sort((a, b) => a + b);
}

console.log(sortArr([13, 11, 15, 5, 6, 1, 8, 12]));

// 006
// Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.

function calculated() {
  var sumEvenNumber = 0;
  var sumOddNumber = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      var evenNumber = i;
      sumEvenNumber += evenNumber;
    }
  }
  for (var x = 1; x <= 500; x++) {
    if (x % 2 !== 0) {
      var oddNumber = x;
      sumOddNumber += oddNumber;
    }
  }
  var subtracts = sumEvenNumber - sumOddNumber;
  var result = subtracts * 12.5;
  return result;
}

console.log(calculated());

// 007
// Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.

function newString(arr) {
  var b = [];
  var c = [];
  var d = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      b.push(arr[i]);
    }
  }
  for (var i = 0; i < b.length; i++) {
    var element = b[i];

    for (var j = 0; j < element.length; j++) {
      if (element.indexOf(element[j]) > 0) {
        c.push(element);
        break;
      }
    }
  }
  for (var x = 0; x < c.length; x++) {
    d.push(c[x][0], c[x][1]);
  }

  return d.join("");
}

console.log(
  newString(["m", "Anne", 12, "Steve", "Joe", "David", "Mark", true, "a"])
);

// 008
// Write a program that takes a string and prints its characters out in reversed order in the
// console.

reverse = (str) => str.split("").reverse().join("");
console.log(reverse("Belgrade Institute of Technology"));

// 009
// Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible
// combinations, as well.

function cominate(n) {
  var result = "";
  for (var i = 1; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (j != i) result = `(${i},${j})`;
      console.log(result);
    }
    result = `(${i},${j})`;
  }
  return result;
}

console.log(cominate(7));

// 010
// Write a program that checks if the entered number is a prime number

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

console.log(test_prime(2));

// 011
// Check if a given string is a palindrome (spaces are ignored).

function palindrome(str) {
  var removeChar = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  if ((str = removeChar.split("").reverse().join(""))) {
    var result = "Yes";
  } else {
    var result = "No";
  }
  return result;
}

console.log(palindrome("a nut for a jar of tuna"));

// 012
// Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.

function calculates(n1, n2) {
  for (var i = 1; i <= n1; i++) {
    for (var j = i; j <= n2; j++) {
      if (n1 % i == 0 && n2 % i == 0) {
        var b = i;
      }
    }
  }
  return b;
}
console.log(calculates(192, 42));
