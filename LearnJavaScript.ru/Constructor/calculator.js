function Calculator(){ //создаём конструктор
  
  this.calculate = function (str) { //внутри него определяем метод, в который передаём строку
    this.a = str.slice(0,1) // ну тут-то понятно 
    this.b = str.slice(3,5) // ну тут-то понятно
    return +this.a + +this.b // возвращаем сумму
  }
}

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10