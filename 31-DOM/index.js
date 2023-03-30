console.log("i am dom");
let n=[3,4,5,6,7,8,9,]
console.log(n);
let newn = n.slice(1,6);
console.log(newn);
let number =[1,2,3,4,5]
console.log(number)
let numbersplice =number.splice(2,2,23,23);
console.log(numbersplice)
console.log(number)
let numbers =[1,2,3,4,5,6,7,8,9];
numbers.forEach(function(values){
    console.log(values*values);
})
numbers.forEach(function(values, index){
    console.log(index + " : "+values);
})
numbers.forEach(function(values,index,arrayss){
    console.log(values*arrayss);
})
