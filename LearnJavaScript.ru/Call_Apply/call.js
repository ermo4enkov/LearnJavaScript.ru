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