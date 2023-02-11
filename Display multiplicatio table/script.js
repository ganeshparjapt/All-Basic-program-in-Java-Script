//dipsplay multiplaction table
const number= prompt('Enter a number to print multipucation table :');
console.log("your Table is bellow")
//logic
let a,b,c
if(number<1){
    console.log("please enter positive number");
}
else{
    for(a=1;a<=10;a++){
        b=number*a;
        console.log(`${number} *  ${a} = ${b}`)
    }
}