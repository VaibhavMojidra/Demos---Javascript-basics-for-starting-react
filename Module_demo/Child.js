import {Parent} from './Parent.js';

export class Child extends Parent{
    constructor(name,surname){
        super(name);
        this.surname=surname;
    }
}