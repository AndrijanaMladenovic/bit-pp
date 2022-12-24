// 001
// Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.

function reverses(number) {
  var number =
    parseFloat(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  return number;
}

console.log(reverses(-124345));

// 002
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("webmaster"));

// 003
// Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.

function alphabet_words(string) {
  var array = string.split(" ");

  if (array.length < 3) {
    return false;
  }
  var prva = array[0];
  var rev = prva.split("").sort().join("");
  var druga = array[1];
  var revDva = druga.split("").sort().join("");
  var treca = array[2];
  var revTri = treca.split("").sort().join("");

  return `${rev} ${revDva} ${revTri}`;
}

console.log(alphabet_words("Republic Of Serbia"));

// 004
// Write a function to split a string and convert it into an array of words.

function splitString(string) {
  var string = string.split(" ");
  return string;
}

console.log(splitString("John Snow"));

// 005
// Write a function to convert a string to its abbreviated form.

function convertString(string) {
  var string = string.split(" ");
  var name = string[0];
  var prezime = string[1];
  var fullName = name + " " + prezime.slice(0, 1) + ".";

  return fullName;
}

console.log(convertString("Andrijana Mladenovic"));

//006
//Write a function that adds string to the left or right of string, by replacing it’s characters.

function replace(number1, number2, side) {
  var side = side.toLowerCase();
  if (
    !side ||
    typeof number1 != "string" ||
    typeof number2 != "string" ||
    !number1 ||
    !number2
  ) {
    return false;
  }
  if (side === "l") {
    var number = number1.slice(number2.length);
    console.log(number);
    var leftSide = number + number2;
    return leftSide;
  } else if (side === "r") {
    var numberRight = number1.slice(number2.length);
    console.log(numberRight);
    var rightSide = number2 + numberRight;

    return rightSide;
  }
}

console.log(replace("00000000", "123", "r"));

// 007
// Write a function that adds string to the left or right of string, by replacing it’s characters.

function firstLetter(string) {
  var prvoSlovo = string[0].toUpperCase();

  return prvoSlovo + string.slice(1);
}

console.log(firstLetter("js string exercises"));

/// 008
// Write a function to hide email addresses to protect them from unauthorized users.

function protect_email(user_email) {
  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splitted[1];
  return part1 + "...@" + part2;
}

console.log(protect_email("andrijanaanci@gmail.com"));

/// 009
///  Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input 'The Quick Brown Fox';, the output should be 'tHE qUICK bROWN fOX';

function swapsCase(string) {
  var string2 = [];
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < string.length; i++) {
    if (upper.indexOf(string[i]) !== -1) {
      string2.push(string[i].toLowerCase());
    } else if (lower.indexOf(string[i]) !== -1) {
      string2.push(string[i].toUpperCase());
    } else string2.push(string[i]);
  }
  return string2.join("");
}

console.log(swapsCase("The Quick Brown Fox"));
