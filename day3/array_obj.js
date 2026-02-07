//1
const colors = ["black","blue","red","pink","purple"];
console.log(colors[2]);

//2
const book = {
    title: "I don't love you anymore",
    author:"Rhthik",
    pages:200,
    publishedYear:2024,

}
//3
const updatedBook = {
    ...book, isRead:true
};
console.log(updatedBook);


//4
const student = [
    {name:"AAAA", grade:"A+"},
    {name:"BBBB", grade:"A"},
    {name:"CCCC", grade:"B"},

];

//5
const company = {
    name:"Something",
    location:"here",
    employee: ["aaa", "bbbb", "cccc"]
};
console.log(company.employee[2]); //cccc


//6
const number = [10, 20, 30];
const newNum = number.map(num =>num+5);
console.log(newNum);


//7
const car = {
    brand:"BMW",
    price:120000

};
const updatedCar = {
    ...car, color:"Red"
};
console.log(updatedCar);

//8
const shoppingList = ["Copy", "coffee", "greenTea"];
const updatedList = ["PencilColor", ...shoppingList];
console.log(updatedList);

//9
const profile = {
    name:"Babita",
    age:20,
    address:{
        city:"Mahendranagar",
        country:"Nepal",
    }
};
console.log(profile.address.city);

//10
const product = [
    {name:"Laptop", price:80000, stock:5},
    {name:"comb", price:100, stock:10}
];
const simplifiedProducts = product.map(product =>({
    name:product.name,
    price:product.price
}))
console.log(simplifiedProducts);

