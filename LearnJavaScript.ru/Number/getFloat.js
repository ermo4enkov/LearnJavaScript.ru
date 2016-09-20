// Code goes here
/*Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2*/

function getDecimal(n){
  
  var a = String(n);
  var b = a.indexOf(".");
  var c = a.slice(b)
  var d = parseFloat(c)
  return d;
  
}

console.log(getDecimal(-12.345))
console.log(getDecimal(1.2))
console.log(getDecimal(-1.2))