/// 01

for (let i = 0; i <= 15; i++) {
  var number = i;
  if(number % 2 == 0){
    console.log(`Even number is ${number}`) ;
  }
  else{
    console.log(`odd number is ${number}`);
  }
}

// 02

var sum = 0
for(var x = 0 ; x <= 1000;x++){
  if(x % 3==0 && x % 5==0){
    
   sum = sum + x;
  }
}console.log(sum);

// 03

var x = ['1' ,'A','B',"c","r",true,NaN,undefined];
var i,type = '';
for(var i = 0 ; i < x.length ; i ++ ){
    type +=  x[i];
}console.log(type);

//04

var sum = 0;
var product = 1;
var array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  sum += array[i];
  product *= array[i];
  }console.log(`Suma je ${sum} i product je ${product}`)

//05

var a =[[1,2,1,24],[8,11,9,4],[7,0,7,27]];
//        a1         a2          a3
for(var i = 0; i<a.length;i++){ // iterates through array a
  var array = a[i]; // a1
  for (var j = 0; j < array.length; j++) { // iterates through a1
    var item = array[j];
    console.log(item);
  }
}




// 06

var sum = 0;
var squares = 0;
  for(var i = 0; i <= 20;i++){
sum += i;
squares = sum * sum;
  }console.log(squares);

//07

        sum = 0;
        var array= [80,77,88,95,68];
        for(var j = 0 ; j < array.length;j++){
          sum += array[j];
      }var prosek = sum / (j);
      if (prosek < 60){
        console.log( `Grade is F`);
      }
      
      else if(prosek>60 && prosek<70){
        console.log( `Grade is D`);
      }
      
      else if(prosek>70 && prosek<80){
        console.log( `Grade is C`);}

      else if(prosek>80 && prosek<90){
          console.log( `Grade is B`);}
      else if(prosek>90 && prosek<=100){
            console.log( `Grade is A `);}
    
    console.log(`Suma je ${sum}`);
    console.log(`Prosek ocena je ${prosek}`);

//08 

    for(var i = 0 ; i <= 100; i++){
      var element = i ;
       if(element % 3 == 0 && element && element % 5 !== 0){
         element = 'fizz';
       }
     else if (element % 5 == 0  && element % 3 !== 0){
     element = 'Buzz'
     }else if( element % 3 == 0 && element % 5 ==0){
       element = 'FizzBuzz'
     }
     console.log(element)
     }
  
