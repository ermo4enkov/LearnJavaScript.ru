function Animal(name){ //Фун-ия конструктор нач-ся с заглавной буквы
  this.name = name; // все this это не для сейчас, это для будущего объекта, которого мы создадим
  this.canWalk = true;
}

var newanimal = new Animal("Ёжик")

alert(newanimal.name)