/**
 * Created by ermo4enkov on 3/15/17.
 */

// Теперь поговорим о наследовании на уровне классов, то есть когда объекты, создаваемые, к примеру, через new Admin,
//     должны иметь все методы, которые есть у объектов, создаваемых через new User, и ещё какие-то свои.


function Animal(name) {
    this.name = name;
    this.speed = 0;
};

Animal.prototype.run = function (speed) {
    this.speed += speed;
    console.log(speed)
};

Animal.prototype.stop = function () {
    this.speed = 0;
};


// function Rabbit(name){
//     this.name = name;
//     this.speed = 0;
// };

function Rabbit(name) {
    Animal.apply(this, arguments);
};

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function (){
    this.speed++;
    console.log(this.name + " jump with " + this.speed);
};

var rabbit = new Rabbit("Pimp");

rabbit.jump();
rabbit.jump();
rabbit.jump();
rabbit.jump();

rabbit.run(333)

// Для того, чтобы наследование работало, объект rabbit = new Rabbit должен использовать свойства и методы из своего
// прототипа Rabbit.prototype, а если их там нет, то – свойства и метода родителя, которые хранятся в Animal.prototype.

// Если ещё короче – порядок поиска свойств и методов должен быть таким: rabbit -> Rabbit.prototype -> Animal.prototype,
// по аналогии с тем, как это сделано для объектов и массивов.

//Чтобы унаследовать свойства от главного "класса" нужно написать

// Rabbit.prototype = Object.create(Animal.prototype);

// В prototype по умолчанию всегда находится свойство constructor, указывающее на функцию-конструктор.
// В частности, Rabbit.prototype.constructor == Rabbit. Если мы рассчитываем использовать это свойство, то при замене
// prototype через Object.create нужно его явно сохранить:

// Rabbit.prototype.constructor = Rabbit;



// Вызов конструктора родителя

// Если посмотреть внимательно, то методы у Animal и Rabbit одинаковые

// function Animal(name) {
//     this.name = name;
//     this.speed = 0;
// }
//
// function Rabbit(name) {
//     this.name = name;
//     this.speed = 0;
// }

// Чтобы упростить поддержку кода можно написать вот так

// function Rabbit(name) {
//     Animal.apply(this, arguments)
// }




// Переопределение метода

// Нам может понадобится переопределить метод здесь, которрый уже есть в родителе.
// Ничего сложного:

// Rabbit.prototype.run = function(speed){
//      this.speed++;
//      this.jump()
// }



// ВЫЗОВ МЕТОДА РОДИТЕЛЯ ВНУТРИ СВОЕГО

// Для вызова метода родителя можно взять его и переопределить прямо внутри

// Rabbit.prototype.run = function(speed) {
//      Animal.prototype.run.apply(this,arguments);
//      this.jump();
// }
//