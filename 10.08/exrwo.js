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