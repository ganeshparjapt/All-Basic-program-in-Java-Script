let greet = () => console.log('hello');
greet();
//with one arguments
let best  = x => console.log(x);
best ('hello')
//terneray oprater
let age = 5;
let welcome = (age < 18)?
    ()=>console.log('babuy'):
    ()=>console.log('Adult');
    
welcome();
//multiline Arrow Functions
let sum =(a,b)=>{
    let result = a+b;
    return result;
}
let result1 =sum(5,7);
console.log(result1);
//inside a regular function
function person() {
    this.name ='ganesh',
    this.age =25,
    this.sayName = function() {
        console.log(this.age);
        function innerfuncion(){
            console.log(this.age);
            console.log(this);
        }
        innerfuncion();
    }
}
let x = new person();
x.sayName();