e = 3;
a = [5,-4.2,3,7]
var result = false;
for(var i = 0; i< a.length; i++) {
  var element = a[i];
  if (element === e) {
    result = true;
  }
}
console.log('Array contains var e: ', result)


b = [-3, 11, 5, 3.4, -8];
for(var i = 0 ; i < b.length ; i++){
  var element = b[i];
  if (element > 0) {
    b[i] = element * 2;
  }
}

console.log(b);

var a = [4,3,2,-1,6]
var min = a[0]
var index = 0;
for(var i=0;i< a.length;i++){
  var currentItem = a[i];
  if(currentItem< min){
    min=currentItem;
    index = i;
  }
}
console.log("minimum je broj" + min + " i on je " + index + ". po redu")

var a = [1,2,4,15,17,12,3,27,53,55,83];
for (var i = 0; i < a.length; i++) {
  console.log(`clan niza ${a[i]} je ${i}. po redu`);
}


for(var x = 0 ; x <= 10 ;x++){
  console.log(x * x );
}

for(var x = 0 ; x <= 15;x++){
  if (x % 2 == 0) {
    console.log(`${x} is even`)
  }
  else {
    console.log(`${x} is odd`)
  }
}

var sum = 0
for(var x = 0 ; x <= 1000;x++){
  if(x % 3==0 && x % 5==0){
   sum = sum + x;
  }
}
console.log(sum);

var sum = 0;
var product = 1;
var a = [1, 2, 3, 4]
for(var i=0;i<a.length;i++){
  sum += a[i];
  product = product * a[i];
}
console.log(`the sum is: ${sum}`);
console.log(`the product is: ${product}`);

var x = ['1' ,'A','B',"c","r",true,NaN,undefined];
var i,type = '';
for(var i = 0 ; i < x.length ; i ++ ){
    type +=  x[i];
}console.log(type);


var a =[[1,2,1,24],[8,11,9,4],[7,0,7,27]];
//        a1         a2          a3
for(var i = 0; i<a.length;i++){ // iterates through array a
  var array = a[i]; // a1
  for (var j = 0; j < array.length; j++) { // iterates through a1
    var item = array[j];
    console.log(item);
    }
  
}

var i,sum = 0;
var squares = 0;
for(var i = 0; i <= 20;i++){
  sum += i;
  squares = sum * sum;
}
console.log(squares);

var sum = 0;
var v = [3,11,-5,-3,2]
for(i = 0 ; i < v.length;i++){
  var item = v[i];
    if (item > 0) {
      sum += item;
    }
}
console.log(sum);

var a = [3,11,-5,-3,2];
sum = 0
for (var i = 0 ; i < a.length;i++){
  var broj = a[i];
  if (broj > 0){
    sum += broj ;
  }

}console.log(sum)


var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,4]
var imaIstih = false;
for(var i = 0 ; i < a.length; i++){
  var number = a[i]; // number = 1
  for (var j = 0; j < a.length; j++) {
    var random = a[j]; // random = 1 , 2,
    if (i !== j && number === random) {
      imaIstih = true;
    }
  }
}
console.log("ima li istih? " + imaIstih)



// minimum od niza
var o = [4,2,3,-1,-2,5,4,6,0,-33]
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

var nizB =[2,3,4,5]
for(i=0;i < nizB.length;i++){
  console.log(nizB[i])
}


