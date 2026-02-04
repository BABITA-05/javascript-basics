//
//var : functional scope 
//let : block scope
//const : block scope
//functional scope example:variable is accesible inside the function and cannot be acessible outside the function
function test(){
    var a = 30;
    console.log("a = ", a)
    //block
    if(true){
        var b = 48;
        console.log("b = ", b)

    }
    console.log("outside the block: ", b)

}
//function call
test()
//console.log("outside function: ", a)


//block scope example
for(let i=1; i<3; i++){
    console.log("i = ", i)
    const c = "hello"
}
//console.log("c = ", c)
//console.log("i = ", i)