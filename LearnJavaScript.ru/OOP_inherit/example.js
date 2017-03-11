/**
 * Created by ermo4enkov on 3/11/17.
 */


// Common object

function  Machine(){

    var enabled = false;

    this.switchOn = function () {
        enabled = true;
        console.log('enable')
    };

    this.switchOff = function () {
        enabled = false;
        console.log('disable')
    };
}

// I have created common object (class) for future objects

function CoffeMachine(power){
    Machine.call(this);  // this is inherit

    this.power = power;

    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        this.waterAmount = amount;
    }


}

var coffeGrinder = new CoffeMachine(300);

coffeGrinder.switchOff(); // we inherited methods from main constructor
coffeGrinder.setWaterAmount(4000);
console.log(coffeGrinder.waterAmount)
console.log(coffeGrinder.power);
coffeGrinder.switchOn(); // we inherited methods from main constructor