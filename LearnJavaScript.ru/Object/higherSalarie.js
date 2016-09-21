// Code goes here

/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var goods = {}

function maxSalarie(obj){
  var sum = 0;
  for (key in obj) {
    sum += obj[key]
    if (sum < obj[key]) continue
    return key;
  }
  return false;
}

console.log(maxSalarie(salaries))
console.log(maxSalarie(goods))