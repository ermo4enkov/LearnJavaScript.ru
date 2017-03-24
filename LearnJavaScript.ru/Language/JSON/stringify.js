/**
 * Created by ermo4enkov on 3/6/17.
 */

// Allow transform usuall object to json

var event = {
    title: "confa",
    date: "today"
};

var Jstr = JSON.stringify(event);

console.log(Jstr);

// При сериализации объекта вызывается его метод toJSON.
// Если такого метода нет – перечисляются его свойства, кроме функций.

var room = {
    number: 23,
    getNum: function () {
        return this.number;
    }
}

var hotel = {
    title: "Конференция",
    date: new Date(Date.UTC(2014, 0, 1)),
    room: room
}

console.log(JSON.stringify(hotel)); // {"title":"Конференция","date":"2014-01-01T00:00:00.000Z","room":{"number":23}}


// Во втором параметре JSON.stringify(value, replacer) можно указать массив свойств, которые подлежат сериализации.

var user = {
    name: "Vasya",
    age: 23,
    window: "window"
};

console.log(JSON.stringify(user, ["name", "age"]) ); // {"name":"Vasya","age":23}
