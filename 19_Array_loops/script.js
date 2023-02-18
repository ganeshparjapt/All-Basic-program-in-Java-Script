let num =[3,4,5,6];
for(let i =0 ;i< num.length;i++){
    console.log(num[i]);
}
//working of for Each loo
num.forEach(element => {
    console.log(element * element);
});
//Array.from
let name ='ganesh';
let arr = Array.from(name);
console.log(arr);// print  (6) ['g', 'a', 'n', 'e', 's', 'h']

//for...of  elemnet ke liye in or item index ke liye Of
for(let items of num){
    console.log(items);
}
// how to work for .. in
for (let item in num){
    console.log(item);
    console.log(num[item]);

}

let student = {
    name : 'gnaesh',
    Fname: 'kishan ',
    sirname:'shree'

}
console.log(student)
for( let i of student){
    console.log(i);
}