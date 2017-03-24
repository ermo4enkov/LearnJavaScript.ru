// Code goes here

/*Создайте калькулятор

Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений*/

var calculator = {
  read: function () {
    this.a = +prompt("Input a", "")
    this.b = +prompt("Input b", "")
  },
  
  sum: function () {
    return this.a + this.b
  },
  
  mul: function () {
    return this.a * this.b
  }
}

console.log(calculator.read())
console.log(calculator.sum())
console.log(calculator.mul())