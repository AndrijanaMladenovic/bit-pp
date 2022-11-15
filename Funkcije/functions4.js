// 001
// Write a program that checks if a given element e is in the array a.
function check() {
  e = 3;
  a = [5, -4.2, 3, 7];
  var result = " ";
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    if (element == e) {
      result = "Yes";
    }
  }
  return result;
}
console.log(check());

// 002
// Write a program that multiplies every positive element of a given array by 2.
function positive(b) {
  for (var i = 0; i < b.length; i++) {
    var element = b[i];
    if (element > 0) {
      b[i] = element * 2;
    }
  }
  return b;
}
console.log(positive([-3, 5, 5, 3.4, -8]));

// 003
// Write a program that finds the minimum of a given array and prints out its value and
// index.

function findMinimum(a) {
  var message = "";
  for (var i = 0; i < a.length; i++) {
    var min = a[0];
    var currentItem = a[i];

    if (currentItem < min) {
      var min2 = currentItem;
      var index = i;
      message = "minimum je broj" + min2 + " i njegov index je " + index + "";
    }
  }
  return message;
}
console.log(findMinimum([4, 2, 0, -8, 6]));

// 004
// Write a program that finds the second smallest number and prints out its value.

function findSecondSmallest(a) {
  for (var i = 0; i < a.length; i++) {
    var min = a[0];
    var min2 = a[1];
    var element = a[i];
    console.log();
    if (element < min) {
      var min1 = element;
    } else if (element !== min1 && element < min2) {
      var min2 = element;
    } else {
      return min2;
    }
  }
  return min2;
}
console.log(findSecondSmallest([4, 2, -2, -1, 6]));

// 005
// Write a program that calculates the sum of positive elements in the array.

function calculatesSumPositive(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}

console.log(calculatesSumPositive([5, 11, -5, -3, 2]));

// 006
// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

function symetric(arr) {
  var result = " ";
  var j = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    if (i == j) {
      break;
    }
    if (arr[i] == arr[j]) {
      result = "Yes";
    } else {
      result = "No";
      break;
    }

    j--;
  }
  return result;
}

console.log(symetric([2, 4, -2, 7, -2, 4, 2]));

// 007
// Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.

function intertwines(arr1, arr2) {
  var c = [];
  for (var i = 0; i < arr1.length; i++) {
    c.push(arr1[i]);
    c.push(arr2[i]);
  }
  return c;
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

// 008
// Write a program that concatenates two arrays.

function concatenates(arr1, arr2) {
  var c = [];
  for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];
    c.push(element);
  }
  for (var j = 0; j < arr2.length; j++) {
    var element2 = arr2[j];
    c.push(element2);
  }
  return c;
}

console.log(concatenates([4, 5, 6, 2], [3, 8, 11, 9]));

// 009
// Write a program that deletes a given element e from the array a.

function deletes(arr, e) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element !== e) {
      b.push(element);
    }
  }
  return b;
}
console.log(deletes([4, 6, 2, 8, 2, 2], 3));

// 010
// Write a program that inserts a given element e on the given position p in the array a. If
// of the position is greater than the array length, print the error message.

function position(arr, e, p) {
  if (p <= arr.length && p >= 0) {
    for (i = arr.length; i > p; i--) {
      arr[i] = arr[i - 1];
    }

    arr[p] = e;
    for (i = 0; i < arr.length; i++) {}
  } else {
    console.log("error");
  }
  return arr;
}

console.log(position([2, -2, 33, 12, 5, 8], 78, 3));
