let add = (a,b)=>{
    let res = a+b;
    console.log("add result:", res)
}
//calling function
add(34, 7)
add(34)
add()

//using default parameter
let add1 = (a=0,b=0)=>{
    let res1 = a+b;
    console.log("add result:", res1)
}
//calling function
add1(34, 7)
add1(34)
add1()