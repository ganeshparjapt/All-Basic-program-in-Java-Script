//create array
const DalyActivis=['getup','eat','goOffice','playing'];
console.log(DalyActivis);
// DalyActivis.push='workinOffice';
console.log(DalyActivis);
// DalyActivis.pop='getup';
console.log(DalyActivis);
console.log(DalyActivis[2]);
DalyActivis.unshift('work')
console.log(DalyActivis);
DalyActivis[2]='exercise';
console.log(DalyActivis);
DalyActivis[2]= function student(){
    this.name='ganesh prajpt'
}
// console.log(DalyActivis[2].name);
//remove element form Array
console.log(DalyActivis);

const removedElement = DalyActivis.pop();
console.log(removedElement);
//remove the fist element
DalyActivis.shift();
console.log(DalyActivis);
//Arry length
console.log(DalyActivis.length);
//find position of string
const position=DalyActivis.indexOf('goOffice');
console.log(position);

//Arry in Array 
let arr = DalyActivis;
console.log(arr);
arr.push('work');
console.log(arr);
console.log(DalyActivis);;






