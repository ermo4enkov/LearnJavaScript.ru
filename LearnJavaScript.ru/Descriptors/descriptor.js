//Ниже мы создали св-во объекта User, в котором указали,
//что свойство может быть изменяемым, настраиваемым и перечислимым
var user = {};

Object.defineProperty(user, "name", {
											value: "Vasya", 
											configurable: true, 
											writable: true, 
											enumerable: true});

console.log(user.name);

//Здесь же мы создали св-во объекта user2, в котором указали,
//что свойство может быть константой

var user2 = {};

Object.defineProperty(user2, "name", {
											value: "Roma",
											configurable: false,
											writable: false,
											enumerable: false});

user2.name = "Petya"

console.log(user2.name)