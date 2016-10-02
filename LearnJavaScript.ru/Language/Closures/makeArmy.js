function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function me() { // функция-стрелок
      alert( me.i ); // выводит свой номер
    };
    
    shooter.i = i
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9