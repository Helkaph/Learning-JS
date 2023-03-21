class Employee {
	#name;
	
	set name(name) {
        if (name.length > 0) {
            this.#name = name;
        } else {
            throw new Error('name is incorrect')
        }
    }
	
	get name() {
		return this.#name;
	}
}
// import Employee from "./employee.js";
// import Programmer from "./programmer.js"

// class Backend extends Programmer {

// }
// let first = new Backend('Alex', 34000, 22, backend)
// console.log(first)
// let first = new Employee(35000)
// class Employee {
// 	constructor(name, salary, coeffs) {
// 		this.name = name;
// 		this.salary = salary;
// 		this.coeffs = coeffs;
// 	}
	
// 	getTotal() {
// 		return this.coeffs.reduce((res, coeff) => {
// 			return res + this.salary * coeff;
// 		}, 0);
// 	}
// }

// let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
// let total = employee.getTotal();
// console.log(total);