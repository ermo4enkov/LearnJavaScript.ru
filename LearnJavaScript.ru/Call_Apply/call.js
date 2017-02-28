/**
 * Created by ermo4enkov on 2/28/17.
 */


function showName() {
    console.log(this.name + " " + this.secondName);
}


var user = {
    name: "Roma",
    secondName: "Ermo"
};

showName.call(user);


// Метод .call позволяет явно передать контекст функции


function showPartName(firstPart, secondPart) {
    console.log(this[firstPart] + " " + this[secondPart])
}

var randomUser = {
    name: "Roma",
    secondName: "Ermo",
    age: 23
};

showPartName.call(randomUser, "name", "age");


// Borrow methods

function printArgs() {

    var join = [].join;
    //в переменную мы записали заимствованный метод от массива
    var args = join.call(arguments, ":");
    // а потом вызвали его с помощью метода call

    console.log(args)
}

printArgs(1,2,3,4,5,"sooqa");