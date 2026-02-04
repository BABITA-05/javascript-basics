//arrow function or annonymous function example
// let myFunction = ()=>{
//     console.log("my function called")

// }
//function call
// myFunction()

//arrow function with default parameter
// let add = (a=0 ,b=0) =>{
//     let result = a+b;
//     console.log(result)

// }
// //function call
// add(30, 40)
// add(45)
// add()



//DAy2
 //Normal function
 function add(){
    let result = 4+5;
    console.log(result)
 }
 add ()



 //arrow function or anonymous function
 let myFunction = ()=>{
    console.log("my function called")
 }
 //calling the function
 myFunction()

 let addNumbers = (a,b) =>{
    console.log(a,b)
    return a+b;

 }
 let result = addNumbers(20, 50)
 console.log(result)


 //single line arrow function
 //setting default values to a and b parameter
 //default parameter: used when no value is passed
 let addNumbers2 = (a=0, b=0) => a+b
 let results2 = addNumbers2(30, 50)
 console.log(results2)


 //Default parameters-- function ko parameter ma a=0, b=0 halne ani arguments ma euta matra value diyo or value nai diena bhane tei 0 sanga add hunxa ani result dinxa
 let result3 = addNumbers2(34)
 console.log(result3)
 let result4 = addNumbers2()
 console.log(result4)
