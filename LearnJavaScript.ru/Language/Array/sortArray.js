/*Скопировать и отсортировать массив

Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, 
но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
Постарайтесь сделать код как можно короче.*/

var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice("").sort()

console.log(arrSorted)
console.log(arr)