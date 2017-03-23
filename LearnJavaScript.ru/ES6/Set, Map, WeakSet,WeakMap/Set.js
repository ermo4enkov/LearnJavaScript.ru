/**
 * Created by ermo4enkov on 3/21/17.
 */


// Set - collection with unique value

let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);
set.add(dasha);

console.log(set.size); // 3

// Основные методы:
// set.add(item) – добавляет в коллекцию item, возвращает set (чейнится).
// set.delete(item) – удаляет item из коллекции, возвращает true, если он там был, иначе false.
// set.has(item) – возвращает true, если item есть в коллекции, иначе false.
// set.clear() – очищает set.

set.forEach((value) => {
    console.log(value);
});

