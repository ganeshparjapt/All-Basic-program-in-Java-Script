//javaScript Getter
//data property
const student={
    firstName:'ganesh',
    secondName: 'prajapt',
    //accesor property (getter)
    get getName() {
        return this.firstName;
    },
    get getsecondName(){
        return this.secondName
    }
    
};
console.log(student.firstName);
console.log(student.getName);
console.log(student.secondName);