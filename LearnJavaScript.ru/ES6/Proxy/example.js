// Прокси (proxy) – особый объект, смысл которого – перехватывать обращения к другому объекту и, при необходимости, модифицировать их.

// Синтаксис:

// let proxy = new Proxy(target, handler)

// Здесь:

// target – объект, обращения к которому надо перехватывать.
// handler – объект с «ловушками»: функциями-перехватчиками для операций к target.

// Почти любая операция может быть перехвачена и обработана прокси до или даже вместо доступа к объекту target, например:
// чтение и запись свойств, получение списка свойств, вызов функции (если target – функция) и т.п.


let user = {}

let proxy = new Proxy(user, {
    get(target,prop){
        console.log(`Read ${prop}`);
        return target[prop]
    },
    set(target,prop,value){
        console.log(`Write ${prop} ${value}`);
        target[prop] = value;
        return true;
    }
});

proxy.firstName = 'Roma' // Write
proxy.firstName; // Read


// Вот как пример практическое использование

let dictionary = {
    'Hello': 'Привет',
    'Bye': 'Пока'
};

dictionary = new Proxy(dictionary, {
    get(target, prop){
        if (prop in target){
            return target[prop]
        }
        console.log(`There are now word ${prop}`)
        return prop;
    }
});

console.log(dictionary['Hello']);
console.log(dictionary['Sooka']);