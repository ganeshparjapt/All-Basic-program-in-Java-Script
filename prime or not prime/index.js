function isPrime(num) {
    // convert the string to a number using parseInt
    num = parseInt(num);
  
    // if the number is less than 2, it's not prime
    if (num < 2) {
      return false;
    }
  
    // loop through all the numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // if the number is divisible by any number between 2 and its square root, it's not prime
      if (num % i === 0) {
        return false;
      }
    }
  
    // if the number is not divisible by any number between 2 and its square root, it's prime
    return true;
  }

  const input = prompt("Enter a number: ");
const num = parseInt(input);

if (isPrime(num)) {
  console.log(num + " is prime");
} else {
  console.log(num + " is not prime");
}

  