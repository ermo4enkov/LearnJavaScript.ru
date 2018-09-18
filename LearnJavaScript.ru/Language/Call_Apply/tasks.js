/**
 * Created by ermo4enkov on 2/28/17.
 */

// Есть функция sum, которая суммирует все элементы массива:
// function sum(arr) {
//     return arr.reduce(function(a, b) {
// return a + b;
// });
// }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
// function sumArgs() {
/* ваш код */
// }

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

// Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
// P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.

function sumArgs(){
    let args = [].slice.call(arguments);
    return args.reduce((item, index) => {
      return item + index;
    })
  }
  
console.log(sumArgs(2,3,3,4))
  
// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  
  function applyAll(fn){
    const args = [].slice.call(arguments, 1)
    return fn.apply(this, args);
  }
  
  
  
  console.log(applyAll(sum,2,3,4))