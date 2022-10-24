//01
var sum = 0
for(i=0; i<=10;i++){
  sum += i
 
} console.log(sum);
// 02
a = [2];
for (let i = 0; i< a.length; i++) {
var cube = a[i]*a[i]*a[i];

}console.log(`${a} up to cube equals ${cube} `);

//03
num = 5;
for (var i = num - 1; i >= 1; i--) {
num = num * i;} 
  console.log(num); 

  //04
 var sumEvenNumber=[];
 var oddNumber = [];
  b = -5;
  for(var i  = b ; i <= 10 ; i++){
   number = i ;
   if(number % 2 ==0){
    var evenNumber = number;
    sumEvenNumber.push(evenNumber);
    
  }
  else{oddNumber.push(number)}
  } 
  var sum = 0;
  for( i = 0 ; i < sumEvenNumber.length;i++){
    sum += sumEvenNumber[i];
  }
  console.log(`The even number is ${sumEvenNumber} and sum of even number is ${sum} ; odd number is ${oddNumber}`);

  //05
  sum = 0;
  var value = [2,3,2];
  for (let i = 0; i < value.length; i++) {
    var element = value[i];
    sum += element;
    
  }console.log(`Sum of digits in number ${value} is ${sum}`);

  //06
  
  var letters = [];
  var word = ['E','c','l','i','p',5,4,2,'s','e'];
  for (let i = 0; i < word.length; i++) {
   
    if(typeof word[i] === 'string')
    {
      letters.push(word[i]);
    }
  } for (let j = 0; j < letters.length; j++) {
     
}
  console.log(`There is ${letters.length} letters in this word.`)
  
  // 07
   var slovo = 'c'
  var array = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
    if(element === slovo){
      index = i ;
      console.log(`Nasao sam ${element} to je index ${index}`);
      
    } else{console.log(`Nisam nasao`)}
    
  } console.log(index);