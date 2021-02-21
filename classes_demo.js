class Person{
    name=''; //Incase of class we dont need var /let / const
    constructor(name){ 
        this.name =name;
    }

    getName() {
        console.log(`${this.name}`); //Incase of class we dont need function keyword for defining function
    }

}


const person =new Person("Vaibhav");
person.getName();

