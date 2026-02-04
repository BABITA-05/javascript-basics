// export const PI = 3.14;
// export function area(r){
//     return PI * r * r;
// }

// class Car{
//     constructor(brand, color){
//         this.brand = brand;
//         this.color = color;
//     }
//     start(){
//         console.log(`${this.brand} started....`);

//     }
// }
// const car1 = new Car("BMW", "black");
// car1.start();


class Vehicle1{
    constructor(type){
        this.type = type;
    }
    move(){
        console.log(`${this.type} is moving`);
    }
}
const car2 = new Vehicle1("BMW");
car2.move();


class Vehicle{
    constructor(type){
        this.type = type;

    }
    drive(){
        console.log(`${this.type} is driving`);
    }
}
class Bike extends Vehicle{
    drive(){
        console.log(`${this.name}driving with sound vroom vroom`);
    }
}
const cycle = new Vehicle("Red");
cycle.drive();


class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

}
class Programmer extends Student{
    constructor(name, marks, language){
        super(name, marks);
        this.language = language;
    }
    showinfo(){
        console.log(`${this.name} has secured ${this.marks} in ${this.language} language`);
    }
}
const me = new Programmer("Hey", 100, "java");
me.showinfo();