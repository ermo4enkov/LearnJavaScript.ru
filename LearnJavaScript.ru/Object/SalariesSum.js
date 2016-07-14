//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

//Если объект пустой, то результат должен быть 0.

//Например:

//"use strict";

//var salaries = {
  //"Вася": 100,
  //"Петя": 300,
  //"Даша": 250
//};

function sumSalaries(obj){
  var sum = 0;
  for (key in obj){
   sum = sum + obj[key]
  }

	return(sum)
}

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

sumSalaries(salaries)