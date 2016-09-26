/*Отфильтровать анаграммы

Анаграммы – слова, состоящие из одинакового количества одинаковых букв, 
но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию aclean(arr), 
которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
Из каждой группы анаграмм должно остаться только одно 
слово, не важно какое.
*/

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
  
  var sum = []
  var result = []
  sum = arr.slice(" ")
  for (var i = 0; i < arr.length; i++) {
    
    for (var a = 0; a < sum.length; a++) {
      
      sum[a] = sum[a].toLowerCase().split("").reverse().join("");
      
      if (sum[a] == arr[i]) {
        delete arr[i]
      }
      
    }
  }
  return arr
}

console.log(aclean(arr))

