/**
 * Created by ermo4enkov on 3/13/17.
 */

// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

    // После этого должен работать такой код:



    Function.prototype.defer = function (value) {
        setTimeout(this, value)
    }; // добавили ко всем функциям метод defer

    function f() {
        console.log( "привет" );
    }

    f.defer(1000);