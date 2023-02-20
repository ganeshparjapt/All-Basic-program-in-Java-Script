let a= prompt("Etner a vlaue ");
document.write(a);
a= Number.parseInt(a);
alert("you endterd a  of type  "+ (typeof a));

let write = confirm("do you want ot write it to the page")
if(write){
    document.write(a)
    document.write(a)
}
else{
    document.write("please alow me to write")
}