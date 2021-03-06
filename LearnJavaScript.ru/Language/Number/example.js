/**
 * Created by ermo4enkov on 6/8/17.
 */


// Проверить выражение на Nan можно с помощью функции isNaN(n)

// Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity/-Infinity

// Для мягкого преобразования строки в число используются функии ParseInt и ParseFloat
// обе эти функции вернут NaN если первым символом будет стоять не число


 // Действительно мощная и всеобъемлющая проверка выражения на число:
 // function isNumeric(n) {
// return !isNaN(parseFloat(n)) && isFinite(n);
// }


// Math.floor
// Округляет вниз
// Math.ceil
// Округляет вверх
// Math.round
// Округляет до ближайшего целого

// Функции общего назначения
//
// Разные полезные функции:
//
//     Math.sqrt(x)
// Возвращает квадратный корень из x.
// Math.log(x)
// Возвращает натуральный (по основанию e) логарифм x.
// Math.pow(x, exp)
// Возводит число в степень, возвращает xexp, например Math.pow(2,3) = 8. Работает в том числе с дробными и отрицательными степенями, например: Math.pow(4, -1/2) = 0.5.
// Math.abs(x)
// Возвращает абсолютное значение числа
// Math.exp(x)
// Возвращает ex, где e – основание натуральных логарифмов.
// Math.max(a, b, c...)
// Возвращает наибольший из списка аргументов
// Math.min(a, b, c...)
// Возвращает наименьший из списка аргументов
// Math.random()
// Возвращает псевдослучайное число в интервале [0,1) – то есть между 0 (включительно) и 1 (не включая). Генератор случайных чисел инициализуется текущим временем.

