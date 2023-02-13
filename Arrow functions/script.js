import contact from "./contact";

let x = function(x,y){
    return x* y;
}

let y =(x,y) => x*y;
//
class person{
    constructor(name){
        this.name =name;
    }
}
const person1 = new person('gnaesh');
console.log(person1.name);
//default Paramenter Values
function sum(x,y =5){
    console.log(x+y);
}
sum (5);
sum(5, 15);
contact ('ganesh ', 26)