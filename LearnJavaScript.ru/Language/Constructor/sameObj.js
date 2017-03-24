// Code goes here

/*Две функции один объект

Возможны ли такие функции A и B в примере ниже, что соответствующие объекты a,b равны (см. код ниже)?

function A() { ... }
function B() { ... }

var a = new A;
var b = new B;

alert( a == b ); // true */


var obj = {};

function A() { return obj; }
function B() { return obj; }

var a = new A;
var b = new B;

alert( a == b );