/*Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:

function isEmpty(obj) {
  /* ваш код 
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
  var counter = 0;
  
  for (key in obj) {
    counter++;
  }
  
  return (counter != 0)? true: false;
  
}


var schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";
