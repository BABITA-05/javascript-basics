//spread operator: it is used to expand or spread the elements of array or object
//symbol: ...
//spread usecase: 1. merging multiple array or object into one

let arr1 = [23,34,45,56]
let arr2 = [56,67,78,47]
console.log("only array: ", arr1)
console.log("spread array:", ...arr1)
let mergedArray = [...arr1, ...arr2]
console.log("merged array:", mergedArray)
let mergedArrays = [1,3,5,...arr1, 23,...arr2]
console.log("merged array:", mergedArrays)


//spread in object (key:value pair)
let person = {
    fullName:"Hari",
    age:30,
    contact:123456789,
    gender:"male",
    income:1230000
}
console.log("normal object:", person)
let student = {
    college:"shikshyalaya",
    marks:90,
    subject:"statistics",
    ...person
}
console.log(student)