const studnet ={
    name:'ganesh bhia',
    class : 7,
    age:12,
    jack:2400,
    sandeep:5500
}
//using for .. in loop
for (let key in studnet){
    console.log(`${key} => ${studnet[key]}` );
}
for (let i in studnet){
    let salery = "$" + studnet[i];
    console.log(`${i}: ${studnet}`);
}
//con\
const string ='code is';
for (let i in string){
    console.log(string[i]);
}
let code = 'by ganesh';
for(let bycode in code){
    console.log(code[bycode]);
}
//definey array
const arr=['ganesh',1,'javascript'];
//using for loop
for(let x in arr){
    console.log(arr[x]);
}