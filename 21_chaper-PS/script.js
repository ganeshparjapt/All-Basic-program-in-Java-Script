let arr = [34,45,56,45,3,42,30,30,3];
console.log(arr);
let newarrr = parseInt(prompt("Enter the value of N to add number in array"));
arr.push(newarrr);
console.log(arr);
//prectice problem -2
console.time("process")
let a;
do{
    a = parseInt(prompt("Enter the nubmwer"));
    
    arr.push(a);
    }
    while(a != 0){
        console.log(arr);
    }
    console.timeEnd("process")
let  fi = (x)=>{
    return x % 10 === 0;
}
let newarr = arr.filter((x)=>{
    return x%10 === 0;
});
// console.log(newarr);
let arrforReduce =[1,2,3,8]
let fii = (h1,h2) =>{
    return h1*h2
}
let aa= arrforReduce.pop();
console.log(aa);
let newarr2 = arr.map((x)=>{
    return x*x;
})
console.log(newarr2);
console.log(arrforReduce.reduce(fii));
