/**
 * Created by ermo4enkov on 3/27/17.
 */

// <<< Атрибуты и DOM-свойства >>>

// Свойства к элементам мы можем задавать сами с помощью JS и это не влияет на их отображение

var body = document.body

body.mydataAnything = {
    name: "Roma"
}

console.log(body)


// <<< Атрибуты >>>

// Доступ к атрибутам осуществляется при помощи стандартных методов:
//   elem.hasAttribute(name) – проверяет наличие атрибута
//   elem.getAttribute(name) – получает значение атрибута
//   elem.setAttribute(name, value) – устанавливает атрибут
//   elem.removeAttribute(name)



// <<< Исходное значение value >>>

// Получается, что атрибут input.getAttribute('value') хранит оригинальное (исходное) значение даже после того, как
// пользователь заполнил поле и свойство изменилось.




// <<< Методы classList: >>>

// elem.classList.contains("class") – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
// elem.classList.add/remove("class") – добавляет/удаляет класс class
// elem.classList.toggle("class")



// Нестандартные атрибуты
// .setAttribute
// .getAttribute

// Свойство dataset, data-атрибуты

// Как в jQuery) управляем элементом с помощью задачи нужной data-
// http://jsbin.com/weciha/1/edit?html,js,output

