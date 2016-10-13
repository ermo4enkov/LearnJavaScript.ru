function show(obj){
  alert(obj.name)
}

var person = {
  name: "Petya",
  age: 25,
  foo : function(){
    show(this);
  }
}

person.foo()