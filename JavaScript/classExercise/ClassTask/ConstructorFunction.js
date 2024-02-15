 //construction function
function Person(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex
    // function Expression
    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name
    }
}
let person = new Person("name",40,"male")
console.log(person.getName())
person.setName("Mr Tobi")
console.log(person.getName())