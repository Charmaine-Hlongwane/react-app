
import { Person } from "./person.js";

export class Student extends Person{
    constructor(name, degree) {
        super(name); // use the super keyword to reference the parent constroctor. You have to call it
        this.degree = degree;
    }

    learn() {
        console.log("I can learn");
    }
}
