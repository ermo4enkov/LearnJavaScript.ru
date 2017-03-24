/**
 * Created by ermo4enkov on 3/9/17.
 */

// Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
//     который будет останавливать кипячение (через clearTimeout).
function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId; //создал приватное свойство

    function getBoilTime() {
         console.log(self.waterAmount * WATER_HEAT_CAPACITY * 80 / power);
    }

    function onReady() {
        console.log( 'Кофе готово!' );
    }

    this.run = function() {
        timerId = setTimeout(onReady, getBoilTime()); // в приватное свойство передал функцию setTimeout,
        //для того, чтобы потом можно было убить при надобности
    };

    this.stop = function() {
        clearTimeout(timerId)
    } //создал публичный метод stop, который убивает выполнение скрипта

};

// Вот такой код должен ничего не выводить:

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

// P.S. Текущую температуру воды вычислять и хранить не требуется.
//
//     P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство
// timerId, которое будет хранить текущий таймер.

