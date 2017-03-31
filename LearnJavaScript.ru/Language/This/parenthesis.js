/*Сумма произвольного количества скобок

Напишите функцию sum, 
которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
Количество скобок может быть любым.

Пример такой функции для двух аргументов – 
есть в решении задачи Сумма через замыкание.*/

function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)(4))