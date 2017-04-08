/**
 * Created by ermo4enkov on 4/8/17.
 */

// Назначение обработчиков событий

// 1. Прямо в html-документе

// <input value="one" type="submit" onclick="alert('click')">

// 2. Использование свойства DOM-объекта

// <input id="elem" type="button" value="Нажми меня" />
//  <script>
//      elem.onclick = function (){
//                      alert("click!")
//                   }
// </script>


// 3. Доступ к элементу через this
// this будет хранится в контексте произошедшего события
// <button onclick="alert(this.innerHTML)">Нажми меня</button>


// 4. addEventListener и removeEventListener

// Назначение обработчика осуществляется вызовом addEventListener с тремя аргументами:
// element.addEventListener(event, handler[, phase] )

// event
// Имя события, например click
// handler
// Ссылка на функцию, которую надо поставить обработчиком.
//     phase
// Необязательный аргумент, «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен, мы его рассмотрим позже.

// Удаление обработчика осуществляется вызовом removeEventListener