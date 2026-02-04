//rest example
//symbol: ...
//used in function parameter
//rest is ued to combine multiple arguments into an array 
//function without rest
let add = (a,b,c,d,e,f,g,h,i,j,k) =>{
    let res = a+b+c+d+e+f+g+h+i+j+k
    console.log("add result:", res)
}
//function call
add(1,2,3,4,5,6,7,8,9,10,11)
add(1,2,3,4,5,6,7,8,9,10,11,12)
add(1,2,3,4,5,6,7,8,9,10)

//function using rest
let addUsingRest = (...values) =>{
    let sum = 0;
    for(let i=0; i<values.length; i++){
        sum+=values[i]
    }
    console.log("result of add using rest:", sum)
}
//callling function
addUsingRest(2,3,4,5,6,7,8,9,10,11,12,13,14,)