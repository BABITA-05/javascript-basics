//Qn1
let firstName = "Babita";
let lastName = "Bhandari";
let message = `Hello!Good morning ${firstName} ${lastName}`;
console.log(message);

//Qn3
// let myName = "Babita";
let greet = (name) => {
    return `Hello ${name}!`;
}
console.log(greet("Babita"));

//Qn4
let multi = (a,b) =>{
    return a*b;
}
console.log(multi(9,3));

//Qn5
const person = {
    name: "Babita",
    age: 20,
    country: "Nepal",
};
const { name, country} = person;
console.log(name);
console.log(country);

//Qn6
const numbers = [10,20,30,40];
const [first, second] = numbers;
console.log(first);
console.log(second);

//Qn7


const sayHello = (name = "Guest") => {
    return `Hello ${name}` ;
};
console.log(sayHello());
console.log(sayHello("Bikash"));

//Qn8

const sum = (...numbers) =>{
    return numbers.reduce((total, n) => total+n, 0);
};
console.log(sum(1,2,3,4));

//Qn9

const arr3 = [1,2,3];
const arr4 = [...arr3, 4, 5];
console.log(arr4);

//Qn10
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    ...obj1,
    c:3,
    d:4
};
console.log(obj2);


