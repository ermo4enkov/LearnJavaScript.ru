/**
 * Created by ermo4enkov on 3/13/17.
 */

// Как указать __proto__ через функцию конструктор

// 1. Укажем в свойстве конструктора ссылк на конкретный объект
// Это не работает в IE 10-

var animal = {
    name: "Cow",
    age: "33",
    myNaMEaNDaGE: function(){
        return ("name:" + this.name + ", age: " + this.age );
    }
};


function Bull() {
    this.color = 'Brown';
    this.__proto__ = animal;
}

var bull = new Bull();

console.log(bull.myNaMEaNDaGE());