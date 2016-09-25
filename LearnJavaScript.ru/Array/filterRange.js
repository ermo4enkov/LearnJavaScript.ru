// Code goes here

/*Создайте функцию filterRangeInPlace(arr, a, b), 
которая получает массив с числами arr и удаляет из него 
все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 
Функция должна менять сам массив и ничего не возвращать.

Например:*/

var arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b ) {
      continue;
    }
    arr.splice(i--, 1);
  }
  
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]