// Code goes here
/*Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2*/

function getDecimal(num){
    var summ = String(num);
    var str = summ;
    var pos = summ.indexOf(".");
    return (0+str.slice(pos))
}


alert(getDecimal(12.444));
alert(getDecimal(1.2));
alert(getDecimal(-1.2));