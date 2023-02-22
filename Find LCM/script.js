const num1 = prompt("Ente a first positive integer : ");
const num2 = prompt("Enter a scecondd positive number");
let min = (num1 > num2) ? num1 : num2 ;
while(true){
    if(min % num1 == 0 && min %num2 == 0){
        console.log(`the LCM ${num1} and ${num2} is ${min} `);
        break;
    }
    min++
}