/**
 * Created by ermo4enkov on 2/27/17.
 */

function Citizen(name, birthday){

    this.name = name;
    this.birthday = birthday;


    Object.defineProperty(this, "age", {
        get: function(){
            var date = new Date().getFullYear();
            return date - +this.birthday;
        }
    });

}


var man = new Citizen("Vasya", 34);

console.log(man.age)