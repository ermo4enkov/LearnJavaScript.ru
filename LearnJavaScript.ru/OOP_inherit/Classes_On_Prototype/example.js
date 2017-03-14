/**
 * Created by ermo4enkov on 3/14/17.
 */

// Common constructor

function Animal(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.run = function (speed){
        this.speed = speed;
        console.log(this.name + "run with " + this.speed);
    }
}


var leo = new Animal("Leo",23,"red");

console.log(leo.run(233))

