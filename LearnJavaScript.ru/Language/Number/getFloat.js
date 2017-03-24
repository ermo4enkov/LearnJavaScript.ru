// Code goes here
/*Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2*/

function getDecimal(num){
  
  var dot = String(num).indexOf(".");
  var str = String(num);
  str = str.slice(dot);
  return parseFloat(str)
  
}


console.log(getDecimal(-12.345))
console.log(getDecimal(1.2))
console.log(getDecimal(-1.2))