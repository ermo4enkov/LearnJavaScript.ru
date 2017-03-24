/*Сумма свойств
важность: 5решение
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650
P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.
*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};


var fal = {}
function sum(obj){
  var salaries = 0;
  for (var key in obj) {
    if (!obj[key]) {
      return 0;
    }
    salaries += obj[key]
  }
  return salaries
}

console.log(sum(salaries))
console.log(sum(fal))