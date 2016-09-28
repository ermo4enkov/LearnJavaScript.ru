/*Строковый буфер с очисткой

Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
  
function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); */


function makeBuffer(){
  var result = ""
  
  function f(str) {
    
    if (!arguments.length) {
      return result  
    }
    result+= str
  }
  
  f.clear = function () {
    result = ""
  }
  
  return f
  
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() );