//constructor function 
function student(){
    this.name='Sandeep bhai',
    this.age =23,
    this.bgroup='B'
}
//object creation
const student1 = new student();
const student2 = new student();
//inherit constructor function using prototype
student.prototype.Fname='Omprakesh';
student.prototype.gender='male';
student.prototype.great = function(){
    console.log('hello'+'  '+ this.name)
}


//prototype vlaue of person
console.log(student.prototype);
//inherit property of prototype
console.log(student1.gender);
console.log(student2.gender)
console.log(student1.age);
console.log(student2.great)//not 
student1.great();
student2.great();