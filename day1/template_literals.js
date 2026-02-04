//template literals or string interpolation example
//it defines a string with embedded expressions
//syntax: `${expression}`

//traditional methods:
const name = 'john'
const Myage = 20 
const fullMessage = 'My name is '+ name + ' and i am ' + Myage + 'years old'
console.log(fullMessage)
   
let fullname = "John Doe"
let age = 45
let myString1 = "My name is "+ fullname + " and my age is "+age
console.log(myString1)

//using template literals
let myString2 = `My name is ${fullname} and my age is ${age}`
console.log(myString2)

const myMessage = `My name is ${fullname.toUpperCase()} and i am ${age} years old`
console.log(myMessage)

