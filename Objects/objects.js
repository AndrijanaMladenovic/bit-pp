// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
//for example:

function groceries(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i].quantity * array[i].price;
  }

  return sum;
}

console.log(
  groceries([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Coffe", quantity: 2, price: 2 },
    { product: "Tea", quantity: 3, price: 3 },
  ])
);

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price.

function mostExpensive(array) {
  var hightesPrice = array[1].price;
  var result = "";
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i].price > hightesPrice) {
      result = `The most expensive one is the ${array[i].name}`;
    }
  }
  return result;
}

console.log(
  mostExpensive([
    { name: "DiamondEarings", price: 980 },
    { name: "Gold watch", price: 250 },
  ])
);

// Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.

function mapLetters(word) {
  var object = {};

  for (var i = 0; i < word.length; i++) {
    if (object[word[i]]) {
      continue;
    }
    var arr = [i];
    for (var j = 0; j < word.length; j++) {
      if (word[i] == word[j] && i != j) {
        arr.push(j);
      }
    }
    object[word[i]] = arr;
  }

  return object;
}
console.log(mapLetters("hello"));

// And who cursed the most in the fight between you and your spouse? Given an object
// with three rounds, with nested objects as your scores per round, return a string of who
// cursed the most: If you, return &quot;ME!&quot; If your spouse, return 'SPOUSE!' ;If a draw, return
// 'DRAW!'

function determineWhoCursedTheMost(array) {
  var sumMe = 0;
  var sumSpuse = 0;
  var result = ``;
  for (var i = 0; i < array.length; i++) {
    sumMe += array[i].me;
    sumSpuse += array[i].spouse;
    if (sumMe > sumSpuse) {
      result = "ME !";
    } else if (sumMe < sumSpuse) {
      result = `SPOUSE!`;
    } else {
      result = `DRAW`;
    }
  }
  return result;
}

console.log(
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 5, spouse: 10 },
    { me: 0, spouse: 10 },
  ])
);
console.log(
  determineWhoCursedTheMost([
    { me: 40, spouse: 5 },
    { me: 9, spouse: 10 },
    { me: 9, spouse: 10 },
  ])
);
console.log(
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 9, spouse: 44 },
    { me: 10, spouse: 55 },
  ])
);

// Create a function that converts color in RGB format to Hex format.

function componentToHex(obj) {
  var obj = {
    red: obj.red,
    green: obj.green,
    blue: obj.blue,
  };

  console.log(obj);
  var hexRed = obj.red.toString(16);
  var hexGreen = obj.green.toString(16);
  var hexBlue = obj.blue.toString(16);
  var hex = hexRed + hexGreen + hexBlue;
  console.log(hex);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(red, green, blue) {
  return "#" + componentToHex(red, green, blue);
}

console.log(rgbToHex({ red: 255, green: 120, blue: 100 }));

/// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks
// down the most efficient way that change can be made using USD quarters, dimes,
// nickels and pennies. Your function should return an object.

function makeChange(number) {
  var quarter = 0; //25
  var dime = 0; //10
  var nickel = 0; //5
  var penny = 0; //1
  var remainingChange = number;

  while (remainingChange >= 25) {
    remainingChange -= 25;
    quarter++;
  }
  while (remainingChange >= 10) {
    remainingChange -= 10;
    dime++;
  }
  while (remainingChange >= 5) {
    remainingChange -= 5;
    nickel++;
  }
  while (remainingChange > 0) {
    remainingChange -= 1;
    penny++;
  }

  var obj = {
    q: quarter,
    d: dime,
    n: nickel,
    p: penny,
  };

  return obj;
}
console.log(makeChange(13));
console.log(makeChange(24));
console.log(makeChange(92));

// Create a function that takes an array of objects like { name: &quot;John&quot;, notes: [3, 5, 4]} and
// returns an array of objects like { name: 'John', avgNote: 4 }. If student has no notes (an
//  empty array) then lets assume avgNote: 0.

function avg(array) {
  var obj = {};
  var avgNote = 0;
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    var brojOcena = array[i].notes.length;
    var ocene = array[i].notes;
    var ime = array[i].name;
    obj = {
      name: array[i].name,
    };
    for (var j = 0; j < ocene.length; j++) {
      console.log(ocene[j]);
      sum += ocene[j];
      avgNote = sum / brojOcena;
    }
  }
  obj = {
    name: ime,
    avgNote: avgNote,
  };
  return obj;
}

console.log(avg([{ name: "John", notes: [] }]));

// Given an object with students and the grades that they made on the tests that they
// took, determine which student has the best Test Average. The key will be the student&#39;s
// name and the value will be an array of their grades. You will only have to return the
///student&#39;s name. You do not need to return their Test Average.

function getBestStudent(input = []) {
  if (!input || input.length == 0) {
    return null;
  }
  var maxAverage = 0;
  var name;
  var sum = 0;
  var avgGrade = 0;
  for (var i = 0; i < input.length; i++) {
    var item = input[i];
    for (var j = 0; j < item.grades.length; j++) {
      sum += item.grades[i];
    }
    avgGrade = parseFloat(sum / item.grades.length).toFixed(2);
    if (avgGrade > maxAverage) {
      maxAverage = avgGrade;
      name = item.name;
    }
  }
  return { name: name, averageGrade: maxAverage };
}
console.log(
  getBestStudent([
    { name: "John", grades: [100, 90, 80] },
    { name: "Mark", grades: [100, 70, 80] },
    { name: "Bob", grades: [100, 100, 80] },
  ])
);
