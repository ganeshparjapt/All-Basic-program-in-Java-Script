//factors of number
const number = prompt("Enter a positive number : ");
//taken input
console.log(`the factor if ${number} is `);

for(let i=1;i<=number;i++){
    if(number % i == 0){
        console.log(i);
    }
}