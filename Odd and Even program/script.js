const number = prompt("Enter the number to see odd and even")
//logic
if(number< 1){
    console.log("plase Enter positiv number")
}
else if(number%2 === 0){
    console.log(`${number} is Even number ` )
}
else{
    console.log(`${number} is odd number ` )

}
