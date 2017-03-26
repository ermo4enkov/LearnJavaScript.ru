

// 1. Все элементы label внутри таблицы. Должно быть 3 элемента.
// 2. Первую ячейку таблицы (со словом "Возраст").
// 3. Вторую форму в документе.
// 4. Форму с именем search, без использования её позиции в документе.
// 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.
// 6. Элемент с именем info[0], без точного знания его позиции в документе.
// 7. Элемент с именем info[0], внутри формы с именем search-person.

var table = document.getElementById('age-table');

/*1*/
var el = table.getElementsByTagName("label");
alert(el.length)

/*2*/
var firstTd = table.rows[0].cells[0].textContent;
alert(firstTd)

/*3*/
var secondForm = document.getElementsByTagName("form");
alert(secondForm[1].name);

/*4*/
var firstForm = document.getElementsByName("search");
alert(firstForm[0].name)

/*5*/
var input = firstForm[0].getElementsByTagName("input");
alert(input[0].type);

/*6*/
var info = document.getElementsByName("info[0]");
alert(info[0].type);

/*7*/
var info2 = document.querySelector('form[name="search-person"] [name="info[0]"]');
alert(info2.type)

