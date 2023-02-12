//multidimensional array
let student1 = ['gnaesh', 23];
let student2 = ['gnaesh ji', 24];
let student3 = ['gnaesh ji prajapat', 23];
let studentData=[student1,student2,student3];
console.log(studentData[0]);
studentData.push(['sandee',45]);
console.log(studentData[3]);
studentData[0][1]='hello';
console.log(studentData);
studentData.pop();
console.log(studentData);
//iteration overt Multidimensional Array
studentData.forEach((student)=>{
    console.log(student)
});
//other method 
studentData.forEach((studen)=>{
    studen.forEach((data)=>{
        console.log(data);
    });
});
//Abut same method using by for loop
console.log("by for loop ");
for(let i of studentData){
    for(let j of i){
        console.log(j);
    }
}


