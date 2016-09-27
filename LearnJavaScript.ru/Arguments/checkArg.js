/*Проверка на аргумент-undefined

Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0*/

function f(x) {
  return arguments.length ? 1: 0
}

alert(f(undefined))
alert(f())