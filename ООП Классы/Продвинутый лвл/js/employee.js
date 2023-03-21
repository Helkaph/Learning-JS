
export default class Employee {
	constructor(name, salary, age) {
		this.salary = salary;
        this.name = name;
        this.age = age;
	}
	getSalary() {
		return this.salary + '$';
	}
}
