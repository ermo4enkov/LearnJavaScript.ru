/**
 * Created by ermo4enkov on 3/7/17.
 */

// Вывод чисел каждые 100 мс, через setTimeout

// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.

function printNumbersInterval(){
    var i = 0;
    var timer = setTimeout(function plus() {
        i++;
        console.log(i);
        timer = setTimeout(plus, 100);
        if (i == 20) clearTimeout(timer);
    }, 100)
};

printNumbersInterval()