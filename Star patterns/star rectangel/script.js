//start printion
const n = prompt("Enter a value to print stars");
let string ="";
//logic
for (let i =0;i<= n;i++){
    for(let j=0;j<n;j++){
        string += "*";
    }
    string += "\n"
}console.log(string);

//second 
let stringg ="";
//logic
for(let ii= 0;ii<=n;ii++){
    for (let jj=0;jj<=n;jj++){
        if(ii=== 0 || ii === n-1){
            string +="*";
        }
        else{
            if(jj === 0 || jj === n-1){
            string +="*";
        }
        else{
            string += " ";
        }
    }
}
//new linejst
string += "\n";
}
