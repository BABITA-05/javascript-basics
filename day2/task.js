const User = {
    name: "Babita",
    login : function(){
        console.log(`username is ${this.name}`);
    }
};
User.login();  //username is Babita

// const clickHandler = User.login;
// clickHandler();        --this is losing content, so in output, 'username is undefined' and to fix this we use .bind

const clickHandler = User.login.bind(User);
clickHandler();  //username is Babita

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getInfo(){
        return `${this.name} costs RS. ${this.price}`
    }
}
const product1 = new Product("Laptop", 500000);
console.log(product1.getInfo());

class FoodProduct extends Product{
    constructor(name, price, expiryDate){
        super(name, price); //super call parent constructor
        this.expiryDate = expiryDate;
    }

    getInfo(){
        console.log(`${this.name} costs Rs.${this.price} and expires on ${this.expiryDate}`)
    }

}
const fruitCake = new FoodProduct("FruitCake", 25, "4 feb")
console.log(fruitCake.getInfo());

function getAppSetting(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({theme:"dark", language:"english"})
        }, 2000)
    })
}
getAppSetting().then((setting)=>{
    console.log(setting)
})


function fetchUsers(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["Ram", "Shyam", "Hari"])
        }, 1000)
    })
}

async function showUsers1(){
    const users = await fetchUsers();
    console.log(users);
}
showUsers1();

function fetchUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            Math.random()>0.5? resolve(["Ram", "Shyam"]): reject("server error") 
        }, 1000)
    })
}

async function showUsers(){
    try{
        const users = await fetchUsers();
        console.log(users);
    }
    catch(error){
        console.log("Something went wrong, please try again later")
    }
}
showUsers();
