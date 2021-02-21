class Person{
    constructor(name){
        this.name=name;
    }
    getName() {
        console.log(`${this.name}`); //Incase of class we dont need function keyword for defining function
    }
}

class Teacher extends Person{
    constructor(name,subject){
        super(name) 
        this.subject=subject;
    }
    getName() {
        console.log(`${this.name} teaches ${this.subject}`); //Incase of class we dont need function keyword for defining function
    }
}

const t1=new Teacher("Vaibhav","Java");
t1.getName();