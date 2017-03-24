/*Умножьте численные свойства на 2
важность: 3решение
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}*/

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for (key in obj){
    if (typeof obj[key] == "number") {
      obj[key] = obj[key]*2
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));