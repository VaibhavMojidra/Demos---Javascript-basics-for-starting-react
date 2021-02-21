// const person={
//     id: 1,
//     name: 'Vaibhav',
//     printdata:function(){
//         console.log(`${this.id} ${this.name}`);
//     }
// }
let person={
    id: 1,
    name: 'Vaibhav',
    printdata:function(){
        console.log(`${this.id} ${this.name}`);
    }
}
person.printdata();
person.name='Rohan'
person.printdata();
person['name']='Payal';
person.printdata();
