//destructuring : extracting data from arrays or objects
//syntax: const[a,b] = [1,2,3,4]
//syntax: const {a,b} = {a:1, b:2}

//destructuring arrays
let myArr = [1,2,3,4]
let [x,y,z,a,b] = myArr
console.log(x,y,z,a,b)

//destructuring objects
let students = {
    fullName : "Hari",
    age : 20,
    address : "ktm",
    gender : "Male",
}
let {age, gender, fullName} = students
console.log(age, gender, fullName)