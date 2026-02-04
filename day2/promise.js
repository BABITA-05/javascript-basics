const user = {
    name : "Bikash",
    login(){
        console.log(`UserName is ${this.name}`)
    }
}

const info = user.login.bind(user);
info ();

function getData(dataId, getNextData){
    setTimeout(() =>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}

//callback hell:nested callbacks
getData(1, ()=>{
    console.log("data 2 is loading")
    getData(2, ()=>{
        console.log("data 3 is loading")
        getData(3);
    });
})

//promise: solution to callback hell
const getPromise = () =>{
    return new Promise((resolve, reject)=>{
    console.log("I am promise");
    reject("some errors occured")
})
};
let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled");
});
promise.catch((err)=>{
    console.log("rejected")
});