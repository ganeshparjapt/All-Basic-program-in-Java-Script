// console.log('Keep entering the when you enter negitev number it will out of loop');
console.log("keep entering the number when you enter negitive number it will out of loop");

let sum=0,number;
while(true){
     number = parseInt( prompt("keep entering the number when you enter negitive number it will out of loop"));

    if(number < 0){
        break;
    }
     sum += number;
}
console.log(`sum of enterd number is : ${sum}`)