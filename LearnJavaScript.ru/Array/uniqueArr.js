// Code goes here

/*Оставить уникальные элементы массива

Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:*/



var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr) {
  var result = []
  
  nextStep:
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i]

    for (var a = 0; a < result.length; a++) {
      if (result[a] == str ) {
        continue nextStep;
      }
      
    }
    result.push(arr[i])
  }
  return result
}
alert( unique(strings) ); // кришна, харе, 8-()