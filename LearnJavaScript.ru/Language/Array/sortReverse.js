/*Сортировать в обратном порядке

Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10*/

var arr = [5, 2, 1, -10, 8];

function sortReverse(arr, a, b){
  
  function compareNumeric(a, b) {
    return (a < b)?  1: -1;
  }
  
  arr.sort(compareNumeric)
  
  return arr
}


console.log(sortReverse(arr))