// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'

// console.log( addClass(obj.className) ); // "open menu new me"

var obj = {
    className: 'open menu'
}


// неправильное решение
function addClass(obj, cls){
    for(var item in obj){
        obj[item] = obj[item].split(" ");
        if (obj[item].indexOf(cls) == -1 ){
            obj[item].push(cls)
        }
        return obj[item].join(", ");
    }
}

// console.log(addClass(obj, "22"))
console.log(addClass(obj, "open"))


//правильное решение

function addClass_right(obj, cls){
    var classes = obj.className ? obj.className.split(" "): [];

    for (var i = 0; i < classes.length; i++){
        if (classes[i] != cls){
            classes.push(cls)
            return obj.className = classes.join(" ")
        }
        return obj.className;
    }

}

console.log(addClass_right(obj, "22"))
console.log(addClass_right(obj, "open"))

// console.log(addClass(obj, "22"))
console.log(addClass(obj, "open"))