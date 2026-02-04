const person = {
    name : "Ankittttttt",
    greet(){
        console.log("Hello!"+this.name);
    }
}
person.greet();

const greetMe = person.greet;
greetMe();

const boundGreet = person.greet.bind(person);
boundGreet();

const person1 = {
    name : "Rabi",

};
const person2 = {
    name : "Bikash",
};
function sayName(age){
    console.log("I am "+ this.name + age);
}
// const sayName1 = sayName.bind(person1);
// const sayName2 = sayName.bind(person2);
sayName.call(person1, 20);
sayName.call(person2, 25);

// const normalFunc = function(){
//     console.log("Normal function", this);

// }
// const arrowFunc = () =>{
//     console.log("Arrow function", this);
// }
// normalFunc();
// arrowFunc();

const obj = {
    name : "Beby",
    inner : {
        name : "beb",
        show : function(){
            console.log("inner this:", this.name)
        }
    }
};
obj.inner.show();