const n = prompt("Enter the value to print stars");
let string ="";
for(let i=0;i<=n;i++){
    //printin spaces
    for(let j =0;j< n-1;j++){
        string += " ";

    }
    for(let k =0;k < i ;k++){
        string += "*";
    }
    string += "\n";
}
console.log(string);