// 001
// Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

const vowelsCount = function (str) {
  var countSamoglasnici = 0;
  str = str.toLowerCase().split(/\s/).join("");
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    console.log(str[i]);
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      countSamoglasnici++;
    }
  }
  return `u recenici ${str} ima ${countSamoglasnici} samoglasnika`;
};

console.log(vowelsCount("andrijana"));

//002
// Write a function that combines two arrays by alternatingly taking elements.

function oneArray(arr1, arr2) {
  var b = [];
  for (var i = 0; i < arr1.length; i++) {
    var element1 = arr1[i];
    for (var j = 0; j < arr2.length; j++) {
      if (i == j) b.push(element1, arr2[j]);
    }
  }
  return b;
}
console.log(oneArray(["a", "b", "c"], [1, 2, 3]));

// 003
// Write a function that rotates a list by k elements.

function rotate(arr, k) {
  for (var i = 0; i <= k + 1; i++) {
    arr.unshift(arr.pop(arr[i]));
  }

  return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//004
//Write a function that takes a number and returns array of its digits.

function digits(num) {
  var b = [];
  var number = num.toString().split(" ").join();
  for (var i = 0; i < number.length; i++) {
    console.log(number[i]);
    b.push(Number(number[i]));
  }

  return b;
}
console.log(digits(123));

// 005
// Write a program that prints a multiplication table for numbers up to 12.

function cominate(n) {
  var result = "";
  for (var i = 1; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (j != i) result = `(${i},${j})`;
      var mnozenje = i * j;
      result = `${i} * ${j} = ${mnozenje}`;
      console.log(result);
    }
  }
  return result;
}

console.log(cominate(12));

// 006
// Write a function to input temperature in Centigrade and convert to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  var caluculate = (celsius / 5) * 9 + 32;
  var message = `${celsius} celsius is ${caluculate} fahrenheit`;
  return message;
}
console.log(celsiusToFahrenheit(50));

// 007
// Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maximum(arr) {
  var number = [];
  for (var i = 0; i < arr.length; i++) {
    var element = Number(arr[i]);
    console.log(element);
    if (typeof element == "number" && !isNaN(element)) {
      number.push(arr[i]);
    }
  }
  var max = number[0];
  for (var i = 0; i < number.length; i++) {
    if (number[i] > max) {
      var maximum = number[i];
    }
  }
  return maximum;
}

console.log(maximum([1, 2, 3, 4, 5, "asdasd", "ada", 10, 50]));

// 008
// Write a function to find the maximum and minimum elements. Function returns an array.

function maximum(number) {
  var maxAndMin = [];
  var max = number[0];
  var min = number[1];
  for (var i = 0; i < number.length; i++) {
    if (number[i] > max) {
      var maximum = number[i];
    }
    if (number[i] < min) {
      var minimum = number[i];
    }
  }
  maxAndMin.push(maximum, minimum);
  return maxAndMin;
}

console.log(maximum([1, 2, 3, 4, 5, 10, 50]));

// 009
// Write a function to find the median element of array.

function median(arr) {
  for (var i = 0; i < arr.length; i++) {
    var medianIndex = i / 2;
    var element = arr[medianIndex];
  }
  return element;
}
console.log(median([1, 2, 3, "bb", 5, 6, 7]));

// 010
// Write a function to find the element that occurs most frequently.

function frequentItem(arr) {
  var maxCount = 0;
  var maxFrequent;
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        maxFrequent = arr[i];
      }
    }
  }
  return maxFrequent;
}

console.log(frequentItem([1, 2, 3, 4, 4, 4, 4, 2, 2, 4]));

// 011
// Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

function newArr(arr) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.length % 2 == 0) {
      b.push(arr[0], arr[arr.length - 1]);
      break;
    } else {
      var middleIndex = (arr.length - 1) / 2;
      console.log(middleIndex);
      b.push(arr[0], arr[middleIndex], arr[arr.length - 1]);
      break;
    }
  }
  return b;
}

console.log(newArr([1, 2, 3, 5, 4, 5, 6]));

// 012
// Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

function avarage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    var avarage = sum / arr.length;
  }
  return avarage;
}
console.log(avarage([1, 2, 3]));

// 013
// Write a function to find all the numbers greater than the average.

function greaterAvg(arr) {
  var sum = 0;
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    var avarage = sum / arr.length;
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > avarage) {
      b.push(arr[j]);
    }
  }
  return b;
}
console.log(greaterAvg([1, 2, 3, 4, 5, 6]));

// 014
// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:

function bmi(weight, height) {
  var message = "";
  var newHeight = height / 100;
  console.log(newHeight);
  bmi = weight / (newHeight * newHeight);

  if (bmi < 15) {
    message = "Starvation";
  } else if (bmi < 17.5 && bmi > 15) {
    message = "Anorexic";
  } else if (bmi < 18.5 && bmi > 17.5) {
    message = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    message = "Overweight";
  } else if (bmi >= 30 && bmi < 40) {
    message = "Obese";
  } else if (bmi >= 40) {
    message = "Morbidly obese";
  }
  return message;
}

console.log(bmi(68, 172));

// 015
function addHeaderAndFooter(maxLength) {
  var result = "";
  for (var i = 0; i < maxLength; i++) {
    result += "*";
  }
  return result;
}
function addStars(str, maxLength) {
  var result = "* " + str;
  for (var i = 0; i < maxLength - str.length - 4; i++) {
    result += " ";
  }

  return result + " *";
}

function addFrame(inputArray) {
  if (!inputArray || inputArray.length < 1) {
    return inputArray;
  }

  var maxLength = 0;
  for (var i = 0; i < inputArray.length; i++) {
    var wordLength = inputArray[i].length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  }
  maxLength += 4;
  var header = addHeaderAndFooter(maxLength);
  var result = header + "\n";

  for (var i = 0; i < inputArray.length; i++) {
    result += addStars(inputArray[i], maxLength) + "\n";
  }
  result += header;
  return result;
}

console.log(addFrame(["Heloo", "World", "In", "a", "frame"]));
