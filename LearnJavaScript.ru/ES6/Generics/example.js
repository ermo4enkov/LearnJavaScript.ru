// Генераторы – новый вид функций в современном JavaScript. Они отличаются от обычных тем, что могут приостанавливать своё
// выполнение, возвращать промежуточный результат и далее возобновлять его позже, в произвольный момент времени.

function* generic() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generic();

console.log(generator.next()); // value: 1, done: false
console.log(generator.next()); // value: 2, done: false
console.log(generator.next()); // value: 3, done: true

// «Открутить назад» завершившийся генератор нельзя, но можно создать новый ещё одним вызовом generateSequence() и выполнить его.