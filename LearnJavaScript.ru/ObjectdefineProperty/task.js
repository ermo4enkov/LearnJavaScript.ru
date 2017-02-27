/**
 * Created by ermo4enkov on 2/27/17.
 */
// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

// Имя и фамилия всегда разделяются пробелом.

// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

// var vasya = new User("Василий Попкин");

// чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин
//
// запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров

// Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.

function User(fullName) {
    this.fullName = fullName;

    this.name = this.fullName.split(" ");
    Object.defineProperty(this, "firstName", {
        get: function (){
            return this.name[0]
        }
    });
    Object.defineProperty(this, "secondName", {
        get: function (){
            return this.name[1]
        }
    });
    Object.defineProperty(this, "fullname", {
        set: function () {
            this.fullName = "fullName";
        }
    });
}

var vasya = new User("Василий Попкин");

console.log(vasya.firstName);
console.log(vasya.secondName);

vasya.fullName = "dfdf dfdf";

console.log(vasya.fullName);
