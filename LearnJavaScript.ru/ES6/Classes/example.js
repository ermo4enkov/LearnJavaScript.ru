/**
 * Created by ermo4enkov on 3/18/17.
 */

// Classes

class User {

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name)
    }

}
let user = new User("Roma");

user.sayHi();

// Getter, Setter and counted features



class Guest {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }

    get fullName(){
        return `${this.firstName} ${this.secondName}`
    }

    set fullName(newValue){
        [this.firstName, this.secondName] = newValue.split(' ');
    }
}

let guest = new Guest('Vasya', 'Pupa');
console.log(guest.fullName);

// Static features

class Hero{
    constructor(first,last){
        this.first = first;
        this.last = last;
    }

    static createUser(){
        return new Hero('Guest', 'Site');
    }
}

new Hero("first", 'last');

console.log(Hero.createUser());


// Extends

class Beast {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(`${this.name} can walk`);
    }
}

class Wolf extends Beast{
    walk(){
        super.walk();
        console.log("...and jump");
    }
}

new Wolf("grey").walk();

// Конструктор constructor родителя наследуется автоматически. То есть, если в потомке не указан свой constructor,
// то используется родительский. В примере выше Rabbit, таким образом, использует constructor от Animal.

