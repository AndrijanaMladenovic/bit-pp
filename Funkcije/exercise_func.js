// 001
// Write a program that calculates the maximum of two given numbers.

function maximum(a, b) {
  if (a > b) {
    console.log(`${a} is maximum`);
  } else {
    console.log(`${b} is maximum`);
  }

  return a, b;
}

maximum(3, 4);

// 002
// Write a program that checks if a given number is odd.

function odd(a) {
  var result = " ";
  if (a % 2 == 0) {
    result = " NUmber is even";
  } else {
    result = "Number is odd";
  }

  return result;
}

console.log(odd(5));

// 003
// Write a program that checks if a given number is a three digit long number.

function threeDigitLong(num) {
  var stringArray = num.toString();
  result = "";
  for (var i = 0; i < stringArray.length; i++) {
    var index = i;

    if (index == 2) {
      result = "Yes";
    } else {
      result = "No";
    }
  }

  return result;
}
console.log(threeDigitLong(564454));

// 004
// Write a program that calculates an arithmetic mean of four numbers.

function arithmetic(a, b, c, d) {
  var sum = a + b + c + d;
  var prosek = sum / arguments.length;
  return prosek;
}
console.log(arithmetic(2, 3, 4, 4));

// 005
// Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:

function square(a) {
  var result = "";
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < a; j++) {
      if (i == 0 || i == a - 1) {
        result += "*";
      } else {
        if (j == 0 || j == a - 1) {
          result += "*";
        } else {
          result += " ";
        }
      }
    }

    result += "\n";
  }

  console.log(result);
}

square(5);

// 006
// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:

function draw(a) {
  var result = "";
  for (var i = 0; i < a; i++) {
    result += "*";
  }

  console.log(result);
}
function drawLines() {
  var args = arguments;
  for (var i = 0; i < args.length; i++) {
    var value = args[i + ""];
    draw(value);
  }
}

drawLines(8, 3, 5);

// 007
// Write a program that calculates a number of digits of a given number.

function digits_count(n) {
  var num = n.toString();
  var result = num.length;

  return result;
}

console.log(digits_count(121234124));

// 008
// Write a program that calculates a number of appearances of a given number in a
// given array.

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function numberAppearances() {
  count = 0;
  for (var i = 0; i < a.length; i++) {
    var number = a[i];
    if (e == number) {
      count++;
    }
  }

  return count;
}

console.log(numberAppearances());

// 009
// Write a program that calculates the sum of odd elements of a given array.

function sumOdd(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element % 2 !== 0) {
      var oddNum = element;

      sum += oddNum;
    }
  }
  return sum;
}
console.log(sumOdd([1, 2, 3, 4, 5]));

//010
// Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.

function lettersCount(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    if (element == "a" || element == "A") {
      count++;
    }
  }

  return count;
}
console.log(lettersCount("Andrijanaaa"));

// 011
// Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function stringNumber(str = "", num) {
  var arr = [str];
  var i = 1;
  while (i < num) {
    arr.push(arr[0]);
    i++;
  }

  return arr.join("");
}

console.log(stringNumber("abc", 4));
