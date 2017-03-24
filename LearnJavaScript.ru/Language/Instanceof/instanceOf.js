/**
 * Created by ermo4enkov on 3/5/17.
 */
let x = [];

console.log(toString.call(x));

let date = new Date();

console.log(toString.call(date));

console.log( {}.toString.call(123) ); // [object Number]
console.log( {}.toString.call("строка")); // [object String]

