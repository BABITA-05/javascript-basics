//1
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

//2
function getFullName(firstName, lastName){
    return firstName+lastName;
}
console.log(getFullName("Babita", "Bhandari"));

//3
function isEven(num){
    return num%2===0;
}
console.log(isEven(3));
console.log(isEven(2));

//4
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1); //slice just convert word in a letter
}
console.log(capitalize("bAbita"));

//5
function calculateArea(radius){
    return 3.14*radius*radius;
}
console.log(calculateArea(2));

//6
function getInitials(firstName, lastName){
    return(
        firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase()+"."
    )
}
console.log(getInitials("Babita", "Bhandari"));

//7
function fahrenheitToCelsius(f){
    return (f-32)*5/9;
}
console.log(fahrenheitToCelsius(98));

//8
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Babita"));


//9
function findMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5,15]));

//10
function formatDate(year, month, day){
    return '"'+day + "/"+month+"/"+year+'"' ;
}
console.log(formatDate(2026, 2,6));