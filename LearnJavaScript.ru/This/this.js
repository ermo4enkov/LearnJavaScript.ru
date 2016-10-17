//Функция не текущий [scope] и можно передавать в неё аргументом this
var man = {
  
  name : "Roma",
  
  sayHi: function() {
    showName(this)
  }
  
}

man.sayHi()

function showName(object){
  alert(object.name)
}