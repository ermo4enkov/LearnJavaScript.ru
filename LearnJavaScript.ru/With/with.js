With + переменные

Что выведет этот код?

var a = 1;

var obj = {
  b: 2
};

with(obj) {
  var b;
  alert( a + b );
}

Answer: 3