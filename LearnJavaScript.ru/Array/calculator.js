/*Создайте калькулятор для введённых значений

Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/

function arraySum() {
  var arr = []
  var sum = 0;
  while(true) {
    var num = prompt("Input number")
    if (num === "" || num === null || isNaN(num)) break;
    arr.push(+num)
  } 
  
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i]
  }
  return sum
}

console.log(arraySum())