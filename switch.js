var a = 4 ;
var result = ''
switch(a){
  case 1 :
  result = 'Ovo je ponedeljak';
  break ;
  case 2 :
  result = 'Ovo je Utorak';
  break ;
  case 3 :
  result = 'Ovo je Sreda';
  break ;
  case 4 :
  result = 'Ovo je Cetvrtak';
  break ;
  case 5 :
  result = 'Ovo je Petak';
  break ;
  case 6 :
  result = 'Vikend je';
  break ;
  case 7 :
  result = 'Vikend je';
  break ;
 default:
  result = 'Broj mora biti izmedju 1 i 7'
}

console.log(result);


var b = 15 ;
var result = ''
switch(b){
  case 1 :
  result = 'Januar';
  break ;
  case 2 :
  result = 'Februar';
  break ;
  case 3 :
  result = 'Mart';
  break ;
  case 4 :
  result = 'April';
  break ;
  case 5 :
  result = 'Maj';
  break ;
  case 6 :
  result = 'Jun';
  break ;
  case 7 :
  result = 'Jul';
  break ;
  case 8:
  result = 'Avgust';
  break ;
  case 9:
  result = 'Septembar';
  break ;
  case 10:
   result = 'Otktobar';
  break ;
  case 11:
   result = 'Novembar';
  break ;
  case 12:
   result = 'Decembar';
  break ;
  default:
   result = 'Broj mora biti izmedju 1 i 12';
  break ;
  }
console.log(result)

var A = 'Good Job';
var B = 'Pretty good' ;
var C = 'Passed' ;
var D = 'Not so good' ;
var F = 'Failed';
var X = 2 ;
var result = '';

switch(X){
  case A :
  result = A ;
  break ;

  case B :
  result = B ;
  break ;

  case C :
  result = C ;
  break ;

  case D :
  result = D ;
  break ;

  case F :
  result = F ;
  break ;
  
  default:
    result = 'Unknown grade '
 } 

console.log(result)

var countryOne = 'Srbija'
var countryTwo = 'USA'
var countryThree = 'Italija'
var countryFour = 'Spanija'
var countryFive = 'Engleska'

var city = 'Beograd'

result = ''

switch(city){
  case 'Novi sad':
  case 'Beograd':
  case 'Nis':
  case 'Pancevo':
  result = 'Ovo je Srbija !' ;
  break;

  case 'New York':
  case 'Chicago':
  case 'Boston':
    result = 'Ovo je Amerika !'
    break;

  case 'Rim':
  case 'Venecija':
  case 'Torino':
    result = 'Ovo je Italija !'
    break;

  case 'Madrid':
  case 'Barselona':
  case 'Valensija':
    result = 'Ovo je Spanija !'
  break;

  case 'London':
  case 'Mancester':
  case 'Brajton':
    result = 'Ovo je Engleska !' 
    default:
    result = 'Please choose a different city '
}
console.log (result)


var u = 10 ;
var i = 2 ;
var operacija = "/";
var proracun ;

switch(operacija){
  case "+" :
  proracun = u + i ;
  break;

  case "-" :
    proracun = u - i ;
    break;

    case "*" :
    proracun = u* i ;
    break ;

    case "/" :
      if(u == 0 || i == 0){
        console.log('nije dozvoljeno deljenje sa nulom')
      }else(console.log(u/i))
      
     
      break ;

}

