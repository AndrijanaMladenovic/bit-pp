//01
e = 3;
a = [5,-4.2,3,7]
var result = false;
for(var i = 0; i< a.length; i++) {
  var element = a[i];
  if (element === e) {
    result = true;
  }
}
console.log('Array contains var e: ', result);

//02

b = [-3, 11, 5, 3.4, -8];
for(var i = 0 ; i < b.length ; i++){
  var element = b[i];
  if (element > 0) {
    b[i] = element * 2;
  }
}

console.log(b);

// 03 

var a = [4,2,2,-1,6]
var min = a[0]
var index = 0;
for(var i=0;i< a.length;i++){
  var currentItem = a[i];
  if(currentItem< min){
    min=currentItem;
    index = i;
  }
}
console.log("minimum je broj" + min + " i on je " + index + ". po redu");

// 04 

// minimum od niza
var o = [4,2,2,-1,6]
var min = o[0]
for(i = 0 ; i < o.length ; i++){
  if (o[i] < min ) {
    min = o[i]
  }
}
console.log("min je" + min)

// ostali bez minimuma
var ostali = [];
for (var i = 0; i < o.length; i++) {
  if (o[i] !== min)
    ostali.push(o[i]);
}

// minimum od ostalih
var min2 = ostali[0]
for(i = 0 ; i < ostali.length ; i++){
  if (ostali[i] < min2 ) {
    min2 = ostali[i]
  }
}

console.log("broj je " + min2);

//05

var a = [3,11,-5,-3,2];
sum = 0
for (var i = 0 ; i < a.length;i++){
  var broj = a[i];
  if (broj > 0){
    sum += broj ;
  }

}console.log(sum);

// 06


// 0
var niz = [[4,5,6,2],[3,8,11,9]];
for( i = 0; i< niz.length;i++){
  var niz2 = niz[i];
  for( j = 0 ; j < niz2.length;i++){
    var item = niz2[j]

  }};

  var a =[[1,2,1,24],[8,11,9,4],[7,0,7,27]];
//        a1         a2          a3
for(var i = 0; i<a.length;i++){ // iterates through array a
  var array = a[i]; // a1
  for (var j = 0; j < array.length; j++) { // iterates through a1
    var item = array[j];
    console.log(item);
  }
}
 // 07
var result = false;
 var inputArray = [2,4,-2,7,-2,4,2];
 for(var i = 0 ; i < inputArray.length;i++){
  if(inputArray[i] == inputArray[(inputArray.length -1)-i]){
    result = true;
  }else {
    result = false ;
    break;
  }
 }
if(result){
  console.log(`the input array is symetrical`)
}else (
  console.log ('the input array is not symetrical')
)

// Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
for(var i = 0 ; i < a.length; i++){
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);

//Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
if(p <= a.length && p >= 0) {
  for(i = a.length; i > p; i--) {
      a[i] = a[i-1];
  }

  a[p] = e;

  for(i = 0; i < a.length; i++) {
      console.log(a[i]);
  }
} else {
  console.log('error');
}


var a = [2, -2, 33, 12, 5, 8]
var e = 78;
var p = 3;

a.splice(p, 0, e)
console.log(a);

