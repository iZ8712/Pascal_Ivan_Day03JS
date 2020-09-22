function  ageCalculator(yearBirth) {
   
   return new Date().getFullYear() - yearBirth;
   
   };

var myAge =  ageCalculator(1995);
var myAge2 = myAge +1;

console.log("You are either " + myAge + " or " + myAge2); 


