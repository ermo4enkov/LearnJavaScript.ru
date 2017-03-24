// Code goes here

/*В объекте есть свойство className, 
которое содержит список «классов» – слов, разделенных пробелом:


Создайте функцию addClass(obj, cls), 
которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"*/

var obj = {
  className: 'open menu'
}

function addClass (obj, cls) {
  
  var classes = obj.className ? obj.className.split(" "): []
  
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] != cls) {
      classes.push(cls)
    } break;
  }
  
  obj.className = classes.join(" ") 
  return obj;
  
}

console.log(addClass(obj, "new"))
console.log(addClass(obj, 'open'))
console.log(addClass(obj, 'me'))