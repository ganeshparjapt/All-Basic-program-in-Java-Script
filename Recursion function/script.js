function countDown (number){
    console.log(number);

    //decrease the number vbalue 
    const newNumber = number - 1;

    //base case
    if(newNumber > -5 ){
        countDown(newNumber);
    }
}
const num = parseInt(prompt("Enter the a number to print revers : "));
countDown(num)