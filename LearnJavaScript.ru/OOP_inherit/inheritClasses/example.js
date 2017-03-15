/**
 * Created by ermo4enkov on 3/15/17.
 */

// Теперь поговорим о наследовании на уровне классов, то есть когда объекты, создаваемые, к примеру, через new Admin,
//     должны иметь все методы, которые есть у объектов, создаваемых через new User, и ещё какие-то свои.


function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = function (speed) {
    this.speed += speed;
}

Animal.prototype.stop = function (speed) {
    this.speed = 0;
}


function Rabbit(name){
    this.name = name;
    this.speed = 0;
}

Rabbit.prototype.jump = function (){
    this.speed++;
    console.log(this.name + " jump with " + this.speed);
};

var rabbit = new Rabbit("Pimp");

rabbit.jump();
rabbit.jump();
rabbit.jump();
rabbit.jump();