// Code goes here

/*Фильтрация через функцию

Создайте функцию filter(arr, func), которая получает 
массив arr и возвращает новый, в который входят только 
те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», 
inArray([...]) – "в массиве [...]". 
Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, 
совпадающие с одним из значений массива.
Пример, как это должно работать:

/* .. ваш код для filter, inBetween, inArray 
var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2*/


var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
  var result = []; // создаём пустой массив в который запушим все прошедшие проверку элементы
  
  for (var i = 0; i < arr.length; i++) { //проходим циклом по массиву arr
    
    var val = arr[i] // создаём переменную, в которую записываем каждое промежуточное значение элемента массива
    
    if (func(val)) { //пишем условие. Если арргумент функции равен true,
      result.push(arr[i]) //элемент массива пушим в result
    }
  }
  return result // возвращаем result
}

function inBetween (a,b) { // создаём функцию с аргументами
  
  return function(x) { // возвращаем функцию с аргументом x
    return x >=a && x <= b; // в которой возвращаем выражение по которому x больше а и меньше b
  }
  
}



function inArray(arr){ // создаём функцию с аргументom
  
  return function(x) { // возвращаем функцию с аргументом x
    return arr.indexOf(x) != - 1;  // в которой возвращаем проверку на то, что элемента x нет в массиве arr
  }
  
}






alert(filter(arr, function(a) {
  return a % 2 == 0
}));

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2*/