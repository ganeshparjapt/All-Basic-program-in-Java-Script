const number =prompt("Enter a number to print fabonccis series :");
//logic
let nexterm,n1=0,n2=1
console.log("Fibonccis series : ")

for(let i =1 ;i<= number;i++){
    console.log(n1);
    nexterm =n1+n2
    n1=n2;
    n2=nexterm;
}