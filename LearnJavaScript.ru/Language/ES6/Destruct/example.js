/**
 * Created by ermo4enkov on 3/16/17.
 */


let [firstName, lastName] = ["Илья", "Кантор"];

console.log(firstName); // Илья
console.log(lastName);  // Кантор


let [, , title] = "Юлий Цезарь Император Рима".split(" ");

console.log(title);


// spread operator

let [fff, ffff, ...rest] = "Юлий Цезарь Император Рима".split(" ");

console.log(fff)
console.log(rest)


//по-умолчанию значения

let [user="vasy", user2="vasya2"] = [];
console.log(user);


// В качестве значений по умолчанию можно указать не только примитивы но и функции

function consoleName() {
    return Date.now() + '-name'
}

let [c,c2=consoleName()] = ['Pupa']

console.log(c);
console.log(c2);

// Object destruct


// let {var1, var2} = {var1:…, var2…}


let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let {title: one, width: two, height: three} = options;

console.log(one)
console.log(two)
console.log(three)
