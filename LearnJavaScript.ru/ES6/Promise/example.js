/**
 * Created by ermo4enkov on 3/22/17.
 */


// Promise syntax

// let promise = new Promise(resolve, reject){}
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке


// Универсальный метод для навешивания обработчиков:
//
//     promise.then(onFulfilled, onRejected)
//
// onFulfilled – функция, которая будет вызвана с результатом при resolve.
//     onRejected – функция, которая будет вызвана с ошибкой при reject.



// Принудительный выброс ошибки будет обработан синхронно
let p = new Promise((resolve,reject) => {
    throw new Error(`fuck6 it's a trap`);
});

p.catch(console.log());


// Example with setTimeout

let time = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`result`);
    }, 1000);
})

time
    .then(
        result => {
            console.log("Fullfiled " + result)
        },
        error => {
            console.log("Rejected" + error);
        }
    );

// После выполнения промис уже ни может быть не изменён, ни дополнен