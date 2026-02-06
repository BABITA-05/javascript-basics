//1
const students = [
    {name:"AAAA", marks:90 },
    {name:"BBBB", marks:99},
    {name:"ABABAB", marks:98},
    {name:"DDDDDD", marks:35},
    {name:"BDSHFD", marks:45}
];
const passingStudents = students.filter(student=>student.marks>=40);
console.log(passingStudents);
const result = passingStudents.map(student => ({
    name:student.name,
    marks:student.marks,
    grade:"Pass",
}));
console.log(result);

//2
const originalUser = {
    name:"Babita",
    age:25,
    country:"Nepal",
    hobbie: ["coding", "basketball"]
};

function updateUserAge(user, newAge){
    return{
        ...user,
        age:newAge
    };
}

const updatedUser = updateUserAge(originalUser, 20);
console.log("Origibal:", originalUser)
console.log("Updated:", updatedUser);