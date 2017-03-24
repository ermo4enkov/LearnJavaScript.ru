// Code goes here

/*Напишите конструктор Calculator, который создаёт 
расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, 
которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, 
например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» 
(по одному пробелу вокруг операции), и возвращает результат. 
Понимает плюс + и минус -.

Пример использования:

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Поддержка скобок и сложных математических 
выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. 
Между ними ровно один пробел.
Предусмотрите обработку ошибок. 
Какая она должна быть – решите сами.
Открыть песочницу с тестами для задачи.*/


function Calculator(){
  
  this.calculate = function (str) {
    this.a = str.slice(2,3)
    this.b = str.slice(0,2)
    this.c = str.slice(4)
    if (this.a == "+") {
      return +this.b + +this.c;
    } 
    return +this.b - +this.c;
    
  }
  
  
}

var calc = new Calculator;
var min = new Calculator;
alert( calc.calculate("51 + 7") )
alert( min.calculate("8 - 37") )