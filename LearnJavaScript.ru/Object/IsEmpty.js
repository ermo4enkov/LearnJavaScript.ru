//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

//Если объект пустой, то результат должен быть 0.

//Например:

//"use strict";

//var salaries = {
  //"Вася": 100,
  //"Петя": 300,
  //"Даша": 250
//};


function isEmpty(obj){
	var counter = 0;
	
  for(key in obj){
  counter++;
  }
  
	(counter != 0)? alert ("false"): alert("true") ;
}

var schedule={};
var name = {
	first: "PETYA"
}

isEmpty(schedule)
isEmpty(name)
