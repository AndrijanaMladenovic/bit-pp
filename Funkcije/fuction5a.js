// Napisati funkciju u JavaScript - u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program pokrene.
function randomQuote(inputArray) {
  var random = Math.floor(Math.random() * inputArray.length);
  return inputArray[random];
}

var quote = randomQuote([
  '"Be yourself; everyone else is already taken.", Oscar Wilde ',
  '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe.", Albert Einstein ',
  '"So many books, so little time.",  Frank Zappa ',
  '"A room without books is like a body without a soul", Marcus Tullius Cicero',
  '"Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.", Bernard M. Baruch ',
  '"Be the change that you wish to see in the world.", Mahatma Gandhi ',
]);
console.log(quote);

// 002
// Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna.

function prestupnaGodina(godina) {
  var result = " ";
  if (godina % 4 == 0 && godina % 100 !== 0) {
    result = "Godina je prestupna";
  } else if (godina % 400 == 0) {
    result = "Godina je prestupna";
  } else {
    result = "Godina nije prestupna";
  }
  return result;
}

console.log(prestupnaGodina(1900));

// 003
// Napisati funkciju koja za zadatu reč proverava koliko ima
// samoglasnika i koliko suglasnika.

const vowelsCount = function (str) {
  var countSamoglasnici = 0;
  var countSuglasnici = 0;
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
    } else {
      countSuglasnici++;
    }
  }
  return `u recenici ${str} ima ${countSuglasnici} suglasnika i ${countSamoglasnici} samoglasnika`;
};

console.log(vowelsCount("andri ja"));

//004
// Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

function array(arr) {
  var b = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    b.push(typeof element);
  }
  return b;
}

console.log(array([1, 2, 3, 4, "5", Infinity, NaN, false]));

//005
// Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve.

function checkIfThereIsANumber(array) {
  if (!array || array.length == 0) {
    return;
  }

  var result = [];
  for (var i = 0; i < array.length; i++) {
    var containsNumber = false;
    for (var j = 0; j < array[i].length; j++) {
      var num = Number(array[i][j]);
      if (!isNaN(num)) {
        containsNumber = true;
        break;
      }
    }

    if (!containsNumber) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(checkIfThereIsANumber(["12bb", "pp", "as23s", "00sd"]));

// 006
// Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.

function array(str) {
  var string = str.split("");
  var b = [];
  b.push(string.length);
  b.push(string[0]);
  var poslednjiIndex = string.length - 1;
  b.push(string[poslednjiIndex]);
  if (string.length % 2 == 0) {
    b.push(string[3] + string[4]);
  } else {
    b.push(string[3]);
  }
  for (var i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
    for (var j = 0; j < string.length; j++) {
      if (j !== i) {
        if (string[j] === string[i]) {
          console.log(string[i]);
          var element2 = string[i];
          var index = string.lastIndexOf(element2);
        }
      } else {
        var word = "not found";
      }
    }
  }
  if (element2 == undefined) {
    b.push(word);
  } else {
    b.push(`@index ${index}`);
  }
  console.log(element2);
  console.log(element2);

  return b;
}
console.log(array("science"));

//007
// Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.

function repeats(arr) {
  var count = 0;
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j >= 0; j--) {
      if (j !== i)
        if (arr[i] === arr[j]) {
          count++;
          break;
        }
      count = 0;
    }
    if (count < 1) {
      b.push(arr[i]);
    }
  }
  return b;
}
console.log(repeats([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// 008
//  Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.

function array(arr, n) {
  b = [];
  var partTwo = arr.splice(n);
  var partOne = arr.splice(0, n);
  b.push(partOne, partTwo);
  return b;
}
console.log(array([2, 3, 4, 5, 6], 3));
