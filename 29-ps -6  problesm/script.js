a = Number.parseInt(prompt("Etner your age to check are you drive"));
const candrive = () =>{
  return a <= 18 ? false:true
}
let con=true

while(con){
    if(a <= 0){
        console.error("please enter valid age ");
        break;
    }
    if(candrive(a)){
        alert("you can drive car")
          // document.getElementsByTagName.h3 =("cand drive")
          document.write("you can drive car")
          document.body.style.background="green"
          document.body.style.color="white"
      }
      else{
          alert("you cannot drive car")
          document.write("you cannto drive car")
      
      }
     con = confirm ("do you went play again ")
}
let number = Number.parseInt(prompt("enter a number : "));
if(number > 4 ){
    location.href ='https://google.com';
}
let color = prompt("Enter the clolor : ");
document.body.style.background = (color);
document.body.style.color="white"
