/*Сумма аргументов

Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10*/

function sum(){
  
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
 
  return sum
}

alert(sum(2,4,10))
alert(sum())