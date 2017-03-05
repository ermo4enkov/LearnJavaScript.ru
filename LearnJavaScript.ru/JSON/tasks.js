/**
 * Created by ermo4enkov on 3/6/17.
 */

//Превратите объект leader из примера ниже в JSON:

var leader = {
    name: "Василий Иванович",
    age: 35
};
// После этого прочитайте получившуюся строку обратно в объект.

var sum = JSON.stringify(leader);
console.log(sum)
sum = JSON.parse(sum)
console.log(sum)