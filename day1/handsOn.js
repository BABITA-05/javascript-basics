const sum = (...values)=>{
    let sum = 0;
    for(let i=0; i<values.length; i++){
        sum+=values[i]
    }
    console.log("sum of array is:", sum)

}
sum(1,2,3,4,5,6,7,8,9,10)