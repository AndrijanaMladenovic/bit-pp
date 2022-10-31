function sum(a, b) {
  console.log(arguments);
  var c = a + b;
  return c;
}

var result = sum(3, 4);
console.log(result);
result = sum(4, 5);
console.log(result);

function sumUpdate() {
  var args = arguments;
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    var value = args[i + ""];
    result += value;
  }

  return result;
}

var sumA = sumUpdate(1, 2, 3, 4, 5);
console.log(sumA);
