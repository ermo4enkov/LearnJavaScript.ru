// Code goes here

/*Создать Calculator при помощи конструктора

Напишите функцию-конструктор Calculator, которая создает 
объект с тремя методами:

Метод read() запрашивает два значения при помощи 
prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/


function Calculator() {
  
  this.read = function() {
    this.a = +prompt("a?","");
    this.b = +prompt("a?","");
  },
  
  this.sum = function() {
    return this.a + this.b
  }, 
  
  this.mul = function() {
    return this.a * this.b
  }
  
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма= " + calculator.sum() );
alert( "Произведение= " + calculator.mul() );