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

Полный список

// Полный список возможных функций-перехватчиков, которые может задавать handler:
//
//     getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
//     setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
//     isExtensible – перехватывает обращение к методу isExtensible.
//     preventExtensions – перехватывает обращение к методу preventExtensions.
//     getOwnPropertyDescriptor – перехватывает обращение к методу getOwnPropertyDescriptor.
//     defineProperty – перехватывает обращение к методу defineProperty.
//     has – перехватывает проверку существования свойства, которая используется в операторе in и в некоторых других методах встроенных объектов.
//     get – перехватывает чтение свойства.
//     set – перехватывает запись свойства.
//     deleteProperty – перехватывает удаление свойства оператором delete.
//     enumerate – срабатывает при вызове for..in или for..of, возвращает итератор для свойств объекта.
//     ownKeys – перехватывает обращения к методу getOwnPropertyNames.
//     apply – перехватывает вызовы target().
//     construct – перехватывает вызовы new target().


