let a = Math.floor((Math.random()*5)+1)
let ans = parseInt(prompt("Enter the number guees under 50 "));
let count = 0;
while (a != ans) {
    if(ans < a ){
        prompt("enter Bigger number for privous");
    }
    else{
        prompt("Enter Small number for privous");
    }
    ans = parseInt(prompt(" "));
    
    count ++;
}

console.log(` are you try time : ${count} congretulated > right number guees : ${a}` );


