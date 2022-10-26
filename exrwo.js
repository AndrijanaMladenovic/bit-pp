e = 3;
a = [5,-4.2,3,7]
var result = false;
for(var i = 0; i< a.length; i++) {
  var element = a[i];
  if (element === e) {
    result = true;
  }
}console.log('Array contains var e: ', result)


b = [-3, 11, 5, 3.4, -8];
for(var i = 0 ; i < b.length ; i++){
  var element = b[i];
  if (element > 0) {
    b[i] = element * 2;
  }
}

console.log(b);


for(var x = 0 ; x <= 10 ;x++){console.log(x * x );}

for(var x = 0 ; x <= 15;x++){
  if(x % 2 == 0){
    console.log(`${x} is even`)
  }else(console.log(`${x} is odd`))
}

var sum = 0
for(var x = 0 ; x <= 1000;x++){
  if(x % 3==0 && x % 5==0){
    
   sum = sum + x;
  }
}console.log(sum);

var i,sum = 0;
var a = [1, 2, 3, 4]
for(var i=0;i<a.length;i++){
  sum += a[i];
}
console.log(`the sum is: ${sum}`);

var x = ['1' ,'A','B',"c","r",true,NaN,undefined];
var i,type = '';
for(var i = 0 ; i < x.length ; i ++ ){
    type +=  x[i];
}console.log(type);


var a =[[1,2,1,24],[8,11,9,4],[7,0,7,27]];

  for(var i = 0; i<a.length;i++){

  }
var i,sum = 0;
var squares = 0;
  for(var i = 0; i <= 20;i++){
sum += i;
squares = sum * sum;
  }console.log(squares);

v = [-3 , 11, 5, 3.4,-8]
  for(i = 0 ; i <= v.length;i++){

  }

  function displayMessage() {
    console.log("Hello World");
  }
  
  displayMessage(); //"Hello World"

  /// da napise kvadrat broja
  function number(num) {
    return num*num}
    console.log(number(8));

// da izracuna koliko celzijuus ima fahreniheita 
function calFahrenheit(cel) {
  return (cel*9/5)+32;}
console.log(calFahrenheit(8));

// Write a function to find the area of a given Rectangle
function rectangleArea(width,height) {
  return width * height;}
  console.log(rectangleArea(10,20));

  //Write a function to find the area and perimeter of a Circle

  function circleValues(radius){
    return `Perimeter: ${2*Math.PI*radius}, Area: ${Math.PI*radius*radius}`}
    console.log(circleValues(10)) ;
    console.log(circleValues(15)) ;
    console.log(circleValues(25));

    //Write a function to reverse a number

    function reverseNum(num) {
      var reverse = 0;
      while(num != 0)
      {
        reverse = reverse * 10;
        reverse = reverse + num%10;
        num = Math.trunc(num/10); // Remove decimal places
      }
      return reverse;
    }
    
    console.log(reverseNum(123)) 
    console.log(reverseNum(5872))

    // izracunati samoglasnike
    
    function countVowels(str) {
     var count = 0 ;
     str = str.toLowerCase();
     for(var i = 0; i <str.length;i++){
     
      if(str.charAt(i)=="a"|| str.charAt(i) == "e" || str.charAt(i) == "i" ||
       str.charAt(i)=="u" || str.charAt(i)=="o"){
        count ++
       }
     }
      return count;
    }

    console.log(countVowels('andrijana'));

 
    //Write a program that checks if a given array is symmetric. An array is symmetric if it can
    ///be read the same way both from the left and the right hand side.

    var word = "Eclip542se";
var sumLetters = word.length;

for (var index in word) {
  if (
    word[index] === "0" ||
    word[index] === "1" ||
    word[index] === "2" ||
    word[index] === "3" ||
    word[index] === "4" ||
    word[index] === "5" ||
    word[index] === "6" ||
    word[index] === "7" ||
    word[index] === "8" ||
    word[index] === "9"
  ) {
    sumLetters--;
  }
}
    