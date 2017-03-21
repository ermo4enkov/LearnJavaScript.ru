/**
 * Created by ermo4enkov on 3/21/17.
 */

// Map - collection where keeps key:point
// In different with Object we can keep any type

let map = new Map();

map.set("1", "Fix");
map.set(1, true);
map.set(true, 2);

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));

// Feature .size keeps map length
console.log(map.size);

// Argument of new Map must be iterirable object

// Методы для удаления записей:
//
// map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
// map.clear() – удаляет все записи, очищает map.
//
// Для проверки существования ключа:
//
// map.has(key) – возвращает true, если ключ есть, иначе false