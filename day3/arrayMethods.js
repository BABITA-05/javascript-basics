//map
const numbers = [1,2,3,4,5]
const doubled = numbers.map(num => num*2);
console.log(numbers);
console.log(doubled);

//filter
const ages = [12,13,14,15,16,17,20];
const adults = ages.filter(age =>age>=16);
console.log(ages);
console.log(adults);

//reduce
const values = [1,2,3,4,5];
const sum = values.reduce((total, current) => total+current, 0);
console.log(sum);
console.log(values);

//find
const users = [
    {id: 1, name:"AAAA"},
    {id:2, name:"BBBB"},
    {id:3, name:"CCCC"}
];
const user = users.find(u => u.id==1);
console.log(user);

//forEach
const colors = ["red", "green", "blue"];
colors.forEach(color => console.log("Color:", color));

//Immutability
const obj = {name:"Babita", age:20};
const updatedObj = {...obj, name:"Bijaya"};
console.log(updatedObj);
console.log(obj);


//high order functions

function applyOperation(arr, operation){
    return arr.map(operation);
}

const nums = [1,2,3,4,5];
const squared = applyOperation(nums, n=>n*n);
console.log(squared);
const double = applyOperation(nums, n=>n*2);
console.log(double);