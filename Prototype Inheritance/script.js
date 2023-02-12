//constructor function fu\
function student(){
    this.name ='ganesh prajapt',
    this.age = 23
}
//create object
const person1 = new student();
const person2 = new student();
//adding property to constructor function
student.prototype.gender='male';
//prototype value of student
console.log(student.prototype);
//inheriting the property form prototype
console.log(person1.gender);
console.log(person2.age);
