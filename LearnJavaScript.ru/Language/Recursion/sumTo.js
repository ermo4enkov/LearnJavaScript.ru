/*Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ...  }

alert( sumTo(100) ); // 5050
Какой вариант решения самый быстрый? Самый медленный? Почему?

Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?*/

function sumTo(n){
  return (n > 1)? n + sumTo(n-1) : n;
}

console.log(sumTo(2))
console.log(sumTo(1))
console.log(sumTo(10))

function sumTo2(n){
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum+=i
  }
  return sum
}

function sumTo(n)
{
  while (n!= 0) 
  {
     return n + sumTo(n-1)
  }
  return n;
}

console.log(sumTo2(10))