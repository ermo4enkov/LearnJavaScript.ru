/*Создайте функцию find(arr, value), которая ищет в массиве arr 
значение value и возвращает его номер, 
если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1*/


arr = ["test", 2, 1.5, false];


function find(arr, a){
  for (var i = 0; i < arr.length; i++) {
    return arr[i] = a ? i : -1 
  }
}

console.log(find(arr, "test"))
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1