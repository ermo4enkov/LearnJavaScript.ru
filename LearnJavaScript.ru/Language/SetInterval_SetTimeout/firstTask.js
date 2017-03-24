/**
 * Created by ermo4enkov on 3/7/17.
 */
// Вывод чисел каждые 100 мс
//
//
// Напишите функцию printNumbersInterval(),
//     которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь вывод
// должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
//
//     Нажмите на кнопку, открыв консоль, для демонстрации:
//
//     P.S. Функция должна использовать setInterval.


function printNumbersInterval() {
    var sum = 0;
    var timer = setInterval(function () {
        sum++;
        if (sum == 20) clearInterval(timer)
        console.log(sum);
    }, 100);
};

printNumbersInterval();