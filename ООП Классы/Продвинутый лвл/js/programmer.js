import Employee from "./employee";
class Programmer extends Employee {
    constructor(name, salary, age, position) {
        super(name, salary, age);
        this.position = position;
    }
}