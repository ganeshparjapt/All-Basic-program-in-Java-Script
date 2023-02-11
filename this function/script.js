const person ={
    name: 'gnaesh',
    age: '20',
    greet: function(){
        let surname = 'prajapt';
        console.log('my name is' + '  ' +   this.name + ' '+ surname);

    }
}
person.greet();