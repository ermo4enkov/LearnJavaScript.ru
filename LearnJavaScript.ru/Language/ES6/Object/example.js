/**
 * Created by ermo4enkov on 3/17/17.
 */


// We can insert value to straight to the Object

let name = 'Roma';
let secondName = 'Ermo'

let user = {
    name: name,
    secondName: secondName
}
//
console.log(user);


// Counted option. I can set straight in object

let ex = "FirstName";


let col = {
    [ex]: 'SecondName'
}

console.log(col.FirstName);

// Object.assign
// Get list of object and copy them to first object in list

let user1 = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };

Object.assign(user1,visitor, admin);

console.log(user1);

// it can also help like first level object copy

let user3 = { name: "Вася", isAdmin: false };

// clone = пустой объект + все свойства user
let clone = Object.assign({}, user3)

console.log(clone);


// Method of Object
// It's a new syntax

let r = {
    name: 'Roma',
    getSecondName() {
        console.log(this.name)
    }
}

r.getSecondName();


// Super name
// Allows us to inherit feature straight from the parent

let Animal = {
    walk(){
        console.log('I walk');
    }
}

let Rabbit = {
    __proto__: Animal,
    walk(){
        super.walk(); // Straight from the parent object
    }
}

Rabbit.walk();

