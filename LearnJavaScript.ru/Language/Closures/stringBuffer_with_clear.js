// Code goes here

/*Добавьте буферу из решения задачи 
Функция - строковый буфер метод buffer.clear(), 
который будет очищать текущее содержимое буфера:

function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); /*/


function makeBuffer() {
  var text = ""
  function buf(arr) {
    if (!arguments.length) {
      return text
    }
    text += arr;
  }
  buf.clear = function () {
    return text= ""
  }
  return buf;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() );