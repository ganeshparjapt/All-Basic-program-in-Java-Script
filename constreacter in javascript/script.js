//constructor function
function erson () {
    this.name ='john',
    this.age  = 23,
    this.class = 'msc',
    this.greet = function(){
        console.log("hello");
    }
}

//create objects 
const person1 = new erson();
const person2 = new erson();

//access properties
console.log(person1.name);
console.log(person2.name);

