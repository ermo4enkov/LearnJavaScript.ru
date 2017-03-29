/**
 * Created by ermo4enkov on 3/29/17.
 */

//Создание элемента

// document.createElement(elem)

var div = document.createElement("div");

div.className("cool");
div.innerHTML("Some text");


// Добавление элемента: appendChild, insertBefore

// someParent.appendChild(elem) - вставляет elem в последнюю позицию среди элементов внутри someParent
// someParent.insertBefore(elem) - вставляет elem в первую позицию среди элементов внутри someParent

// Для вставки элемента в начало достаточно указать, что вставлять будем перед первым потомком:
//     list.insertBefore(newLi, list.firstChild);

// Если не указать параметр, то сработает как appendChild




// Клонирование узлов: cloneNode

var div2 = div.cloneNode("true");

// Удаление узлов: removeChild

// parentElem.replaceChild(newElem, elem)
// Среди детей parentElem удаляет elem и вставляет на его место newElem.

//В современном стандарте есть также метод elem.remove(), который удаляет элемент напрямую, не требуя ссылки на родителя.
// Это зачастую удобнее, чем removeChild.