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

//Создаём свой объект в котором указываем toString()
//Но если мы создадим его сами "в лоб", то у нас не получится сделать так, чтобы это св-во було неперечисляемым
//как по умолчанию в стандартных объекта 

var user3 = {
	name: "Igor",
	toString: function(){
		return this.name;
	}
}

Object.defineProperty(user3, "toString", {enumerable: false});

console.log(user3)


/*Создадим объект, в котором может задать функцию значению через параметр get*/

var user4 = {
	firstName: "Nata",
	secondName: "Ermo"
}

Object.defineProperty(user4, "fullName", {get: function(){return this.firstName + this.secondName}});

console.log(user4.fullName);

/*Создадим объект, в котором может задать функцию задающую какие-то свойства через параметр set*/