//cuntructor function 
function student(){
    this.name= 'ganesh prajapt',
    this. age = 23
}
//create object
const student1 = new student();
const student2 = new student();
//adding property to constructer function
student.prototype.gender ='male';
student.prototype.Fname = 'kishan ram prajtp'
//prototype value of the student 
console.log(student.prototype)
//inherit the property of prototype
console.log(student1.gender)
console.log(student1.age)
console.log(student1.Fname)
