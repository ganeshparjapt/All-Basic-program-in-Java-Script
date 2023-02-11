const Oprater = prompt("Enter which oprater (/,  *,  -,  +,  %,  ) chouse to print result : ");
const number1 = prompt("Enter number fist : ");
const number2 = prompt("Enter number seco : ");
//logic
let result
if(Oprater == '/'){
   result= number1 / number2
   console.log(`${number1} / ${number2} = ${result}`);
}
else if(Oprater == '*'){
   result= number1 * number2
   console.log(`${number1} * ${number2} = ${result}`);

}                           

else if(Oprater == '-'){
       result= number1 - number2
   console.log(`${number1} - ${number2} = ${result}`);

}                           
else if(Oprater == '+'){
   result= number1 + number2
   console.log(`${number1} + ${number2} = ${result}`);

}                           
else if(Oprater == '%'){
   result= number1 % number2
   console.log(`${number1} % ${number2} = ${result}`);

}                           

else{
  console.log("please choese in witch oprater ")

}
   