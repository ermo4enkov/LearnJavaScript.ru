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