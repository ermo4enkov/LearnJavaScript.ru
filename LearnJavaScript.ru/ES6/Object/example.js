/**
 * Created by ermo4enkov on 3/17/17.
 */


// We can insert value to straight to the Object

let name = 'Roma';
let secondName = 'Ermo'

let user = {
    name: name,
    secondName: secondName
}

console.log(user);


// Counted option. I can set straight in object

let ex = "FirstName";


let col = {
    [ex]: 'SecondName'
}

console.log(col.FirstName);