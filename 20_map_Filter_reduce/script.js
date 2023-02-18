let arr = [45,65,67];
//Array map method

 arr.map((value,index,array )=>{
     console.log(value, index , array );
     return value +index
})
//filter mathod
let fi = (b) =>{
    return b <= 45;
}

let arr2 = [34,45,56,34,23];
let filterr = arr2.filter(fi)
console.log(filterr,arr2);
//

//Array reduce mathod 
// let arr3 = [1,2,3,4,5,6,3];
// let newarr3 = arr3.reduce=(h1,h2) => {
//     return h1+ h2
// };
// console.log(newarr3);

 let arr3 = [1,2,3,4,5,6,3,1];
//  let newarr3 = arr3.reduce((inA ,inB) =>{
//     return inA+inB;
//  })
//  console.log(newarr3);
let newarr3 = (inA,inB) => {
    return inA + inB;
}
console.log( arr3.reduce(newarr3) );


