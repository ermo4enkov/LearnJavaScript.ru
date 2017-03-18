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