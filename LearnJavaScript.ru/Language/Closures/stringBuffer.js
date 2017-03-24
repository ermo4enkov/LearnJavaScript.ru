/*Задача – реализовать строковый буфер на функциях в 
JavaScript, со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, 
которая при вызове buffer(value) добавляет значение 
в некоторое внутреннее хранилище, а при вызове 
без аргументов buffer() – возвращает его.

Вот пример работы:



var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
Буфер должен преобразовывать все данные к строковому типу:

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'
Решение не должно использовать глобальные переменные*/

function makeBuffer() {
  
  var text= "";
  
  return function() {
    if (!arguments.length) {
      return text;
    }
    for (var i = 0; i < arguments.length; i++) {
      text += arguments[i]
    }
  }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer(0);
buffer(1);
buffer(0);

alert( buffer() );