// 01
// Write a function that checks if a given string contains digit 5.

function check(string, num) {
  var result = false;
  var number = num.toString();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === number) {
      result = true;
    }
  }
  return result;
}
console.log(check(`1b895abd`, 5));

// 002
// Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.

function replaceString(string, n, chester) {
  if (typeof string == "number" || typeof n == "number") {
    return false;
  }
  if (n.length < 1) {
    return string;
  }
  return string.replace(n, chester);
}

console.log(
  replaceString("Programming in JS is super interesting!", "JS", "**")
);

// 003
/// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function addChar(string, position, char) {
  if (!string || !position || !char || typeof string != "string") {
    return 0;
  }
  var arr = [];
  var index = position - 1;
  for (var i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  arr.splice(index, 0, char);
  arr = arr.join("");
  return arr;
}
console.log(addChar("Goo morning", 4, "d"));

// 004
// Write a function that deletes a character from the given position in the string.

function addChar(string, position) {
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  arr.splice(position, 1);
  arr = arr.join("");
  return arr;
}
console.log(addChar("Goodd morning", 3));

// 005
// Write a function that deletes every second element of the given array.

function deletes(array) {
  if (array.length < 2) {
    return false;
  }
  var b = [];
  for (i = 0; i < array.length; i += 2) {
    console.log(array[i]);
    b.push(array[i]);
  }
  return b;
}
console.log(deletes([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 006
// Write a function that replaces the elements of the given array between two positions with
// their doubled values.

function duoble(array, start, end) {
  if (start > end && end > array.length) {
    return false;
  }
  for (i = start; i <= end; i++) {
    array[i] *= 2;
  }
  return array;
}
console.log(duoble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// 007
// Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!

function compareArrays(array1 = [], array2 = []) {
  if (!array1 || array1.length == 0 || !array2 || array2.length == 0) {
    return false;
  }

  // return array1.every(element => array2.includes(element));
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }

  console.log(result);

  return JSON.stringify(array1) === JSON.stringify(result);
}

console.log(compareArrays([3, 4, 1, 5], [8, 9, 3, 1, 11, 4, 3]));
// 008

// 002
function replace(sentence, element, replacement) {
  if (
    !sentence ||
    sentence.length == 0 ||
    !element ||
    element.length == 0 ||
    !replacement ||
    replacement.length != 1
  ) {
    return sentence;
  }
  var replacementString = "";
  for (var i = 0; i < element.length; i++) {
    replacementString += replacement;
  }
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    var z = i;
    var word = "";
    for (var j = 0; j < element.length; j++) {
      if (sentence[z]) {
        word += sentence[z];
        z++;
      }
    }
    if (word.toLowerCase() == element.toLowerCase()) {
      result += replacementString;
      i += element.length - 1;
    } else {
      result += sentence[i];
    }
  }

  return result;
}
console.log(replace("Programming in JS is super interesting!", "JS", "*"));

//008
// Write a function that sorts an array of strings by the number of appearances of the letter

function sortArrayByInputLetter(input, letter) {
  if (!input || input.length == 0 || !letter || letter.length != 1) {
    return input;
  }

  var result = [];
  for (var i = 0; i < input.length; i++) {
    var counter = 0;
    for (var j = 0; j < input[i].length; j++) {
      var element = input[i][j];
      if (element == letter) {
        counter++;
      }
    }

    if (result.length > 1) {
      var maxCount = 0;
      for (var z = 0; z < result.length; z++) {
        if (result[z][1] > maxCount) {
          maxCount = result[z][1];
        }
      }

      if (maxCount <= counter) {
        var newElement = [input[i], counter];
        result = [newElement].concat(result);
      } else {
        result.push([input[i], counter]);
      }
    } else {
      result.push([input[i], counter]);
    }
  }

  var sorted = [];
  for (var i = 0; i < result.length; i++) {
    sorted.push(result[i][0]);
  }

  return sorted;
}

console.log(
  sortArrayByInputLetter(
    ["apple", "tea", "amazing", "morning", "Nostradamus", "Avala"],
    "a"
  )
);

//009
// Write a function that prints out the date of the next day.

function calcNextDay(day, month, year) {
  var date = new Date(year, month - 1, day);
  var oneDay = 24 * 60 * 60 * 1000;
  var nextDate = new Date(date.getTime() + oneDay);
  return `${nextDate.getDate()}.${
    nextDate.getMonth() + 1
  }.${nextDate.getFullYear()}`;
}

console.log(calcNextDay(25, 10, 2018));

// 010
// Write a function that prints out the date of the previous day.

function calcPreviousDay(day, month, year) {
  var date = new Date(year, month + 1, day);
  var oneDay = 24 * 60 * 60 * 1000;
  var nextDate = new Date(date.getTime() - oneDay);
  return `${nextDate.getDate()}.${
    nextDate.getMonth() - 1
  }.${nextDate.getFullYear()}`;
}

console.log(calcPreviousDay(1, 08, 1995));
