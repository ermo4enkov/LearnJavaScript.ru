/*Напишите функцию pow(x,n), которая возвращает 
x в степени n. Иначе говоря, умножает x на себя 
n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
Создайте страницу, которая запрашивает x и n, 
а затем выводит результат pow(x,n).*/


function pow(x,n){
  
  var sum = x;
  
  for (var i=1; i < n; i++){
    sum = sum * x
    
  }
  console.log(sum)
}