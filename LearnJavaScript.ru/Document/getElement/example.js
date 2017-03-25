/**
 * Created by ermo4enkov on 3/25/17.
 */


// document.getElementById или просто id

// Eсли элементу задан id, то его легче всего отыскать document.getElementById('id')



//document.getElementsByTagName('tag')

// Возвращает список всех элементов по заданному тегу



// document.getElementsByName("name");
// Возвращает элементы с указанным атрибутом name


// document.getElementsByClassName
// Возвращает список элементов с указанным классом

//querySelectorAll
// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.

// querySelector

// Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий CSS-селектору css.


// matches
// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.


// closest

// Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css.
// Сам элемент тоже включается в поиск.


// http://jsbin.com/manufezife/edit?html,js,output