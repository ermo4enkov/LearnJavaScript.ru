/*Функция removeClass

У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.*/

var obj = {
  className: 'my menu menu'
};

function removeClass(obj, cls){ 
  
  var classes = obj.className ? obj.className.split(" ") : []
  var count = 0;
  
  for (var i = 0; i < classes.length; i++) {
    //delete classes[i]

    if (classes[i] === cls) {
      count++
      if (count > 1) {
        break;
      } else {
        delete classes[i]
      }
    }
    
  }
  obj.className = classes.join(" ")
  return obj
}

console.log(removeClass(obj, 'menu'))