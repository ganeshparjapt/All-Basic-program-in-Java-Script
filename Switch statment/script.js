//this program is usin switch
const number1 = parseInt(prompt("Enter the first number"));
const number2 = parseInt(prompt("Enter the second number"));
const oprater = prompt("Enter the number in which ( /, * , -, + )");
let result = 0
switch (oprater) {
    case '/':
        result = number1 / number2;
      console.log(" out put is : ",result);
        break;
    case '*':
        result = number1 * number2;
      console.log(" out put is : ",result);
        break;
    case '-':
        result = number1 - number2;
      console.log(" out put is : ",result);
        break;
    case '+':
        result = number1 + number2;
      console.log(" out put is : ",result);
        break;

    default:
        console.log("please chose right oprater")
        break;
}