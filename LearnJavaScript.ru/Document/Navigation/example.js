/**
 * Created by ermo4enkov on 3/24/17.
 */

// Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.

// В мире DOM в качестве значения, обозначающего «нет такого элемента» или «узел не найден», используется не undefined, а null.


// Все свойства здесь ТОЛЬКО ДЛЯ ЧТЕНИЯ!!!

// Коллекции типа childNodes - псевдомассивы и чтобы работать с ними как с массивам нужно будет вызвать через
// [].forEach.call()


//<HTML> = document.documentElement
// <BODY> = document.body

// Дети: childNodes, firstChild, lastChild

// Навигация только по элементам

    // children – только дочерние узлы-элементы, то есть соответствующие тегам.
    // firstElementChild, lastElementChild – соответственно, первый и последний дети-элементы.
    // previousElementSibling, nextElementSibling – соседи-элементы.
    // parentElement – родитель-элемент.


// У конкретных элементов DOM могут быть свои дополнительные ссылки для большего удобства навигации.
//     Здесь мы рассмотрим таблицу, так как это важный частный случай и просто для примера.
//     В списке ниже выделены наиболее полезные:
//     TABLE
//
// table.rows – коллекция строк TR таблицы.
//
//     table.caption/tHead/tFoot – ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
//     table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
//
//     THEAD/TFOOT/TBODY
//
// tbody.rows – коллекция строк TR секции.
//
//     TR
//
// tr.cells – коллекция ячеек TD/TH
//
// tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
// tr.rowIndex – номер строки в таблице
//
// TD/TH
//
// td.cellIndex – номер ячейки в строке
//
