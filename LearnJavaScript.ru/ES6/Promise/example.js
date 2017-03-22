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


let p = new Promise((resolve,reject) => {
    throw new Error(`fuck6 it's a trap`);
});

p.catch(console.log())