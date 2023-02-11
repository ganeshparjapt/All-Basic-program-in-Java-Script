const student ={
    name:'ganesh',
    age: '20',
    class : 'msc',

}

console.log(student.name)
console.log(student.age)
console.log(student.class)
console.log(typeof student)
//using bracket notation
console.log(student["name"]);
console.log(student["class"]);
console.log(typeof student);

//Function based objects
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello

