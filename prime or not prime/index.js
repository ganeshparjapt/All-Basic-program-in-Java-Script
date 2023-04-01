let number = parseInt(prompt("Enter the value : "));
let prime
if(number === 1 ){
    prime = true
}
else{
    for(let i=2;i<= number;i++){
        if(number % i === 0 ){
            prime = true;
            break;
        }
        else{
            prime = false
        }
        
       
    }


}
if(prime = true){
    console.log("your number is prime : "+number);
}
if(prime = false){

    console.log("you num ber is not prime : "+number)
}