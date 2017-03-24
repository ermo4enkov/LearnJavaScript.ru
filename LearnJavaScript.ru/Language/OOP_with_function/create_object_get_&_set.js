/**
 * Created by ermo4enkov on 3/9/17.
 */

// Напишите конструктор User для создания объектов:

    // С приватными свойствами имя firstName и фамилия surname.
    // С сеттерами для этих свойств.
    // С геттером getFullName(), который возвращает полное имя.

    // Должен работать так:

    // function User() {
        /* ваш код */
    // }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
//
// alert( user.getFullName() ); // Петя Иванов

function User() {
    var that = this;

    this.setFirstName = function (name) {
        return that.name = name;
    };

    this.setSurname = function (surname) {
        return that.surname = surname;
    };

    this.getFullName = function () {
        try {
            if (that.name === undefined || that.surname === undefined){
                throw new Error("WHERE NAME")
            }
            console.log(that.name + " " + that.surname);
        } catch (e) {
            console.log(e)
        }
    }
}

var user = new User();


user.setFirstName("Петя");
user.setSurname("Иванов");

user.getFullName()

