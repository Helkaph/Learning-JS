// class User {
//     constructor(name, surn) {
//         this.name = name;
//         this.surn = surn;
//     }
//     getName() {
//         return this.name;
//     }
//     getSurn() {
//         return this.surn;
//     }
// }
// class Employee extends User {
//     constructor(name, surn, age, salary, position) {
//         super(name, surn);
//         this.age = age;
//         this.salary = salary;
//         this.position = position;
//     }
//     getAge() {
//         return this.age;
//     }
//     getSalary() {
//         return this.salary;
//     }
//     getPosition() {
//         return this.position;
//     } 
// }
// class Programmer extends Employee {
//     setWork(lang) {
//         if (lang == 'JavaScript' || lang == 'JS') {
//             this.work = "Write user interaction's scripts";
//         } else if (lang == 'CSS') {
//             this.work = 'Write site structure';
//         } else {
//             this.work = 'Write backend'
//         }
//     }
//     getWork() {
//         return this.work;
//     }
// }
// class Disagner extends Employee {
//     setWork() {
//         this.work = 'make a website layout'
//     }
//     getWork() {
//         return this.work;
//     }
// }
// class User {
// 	_name;
	
// 	setName(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// }

// class Employee extends User {
// 	setName(name) {
// 		if (name.length > 0) {
// 			this._name = name; // not works
// 		}
// 	}
// }
// class User {
// 	setName(name) {
// 		if (this._notEmpty(name)) {
// 			this.name = name;
// 		}
// 	}
// 	getName() {
// 		return this.name;
// 	}
	
// 	_notEmpty(str) {
// 		return str.length > 0;
// 	}
// }
// class Employee extends User {
// 	setSurn(surn) {
// 		if (this._notEmpty(surn)) { //not works;
// 			this.surn = surn;
// 		}
// 	}
// 	getSurn() {
// 		return this.surn;
// 	}
// }

// class User {
// 	name;
	
// 	setName(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// }

// class Employee extends User {
// 	setName(name) {
// 		super.setName(name);
// 	}
// }

// let first = new Employee;
// first.setName('Nurk');
// console.log(first.getName());
// class User {
//     constructor(name, surn) {
//         this.name = name;
//         this.surn = surn;
//     }

//     getName() {
//         return this.name;
//     }
//     getSurn() {
//         return this.surn;
//     }
// }
// class Employee extends User {
//     constructor(name, surn, age, salary) {
//         super(name, surn);
//         this.age = age;
//         this.salary = salary;
//     }

//     getAge() {
//         return this.age;
//     }
//     getSalary() {
//         return this.salary;
//     }
// }
// class User {
// 	setAge(age) {
// 		if (age >= 0) {
// 			this.age = age;
// 		} else {
// 			throw new Error('need age more 0');
// 		}
// 	}
// }
// class Employee {
// 	setAge(age) {
// 		if (age <= 120) {
// 			super.setAge(age);
// 		} else {
// 			throw new Error('need age less 120');
// 		}
// 	}
// }

// class User {
//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
//     setAge(age) {
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }
// class Employee extends User {
//     setSalary(salary) {
//         this.salary = salary;
//     } 
//     getSalary() {
//         return this.salary;
//     } 
//     setAge(age) {
//         if (age >= 18 && age <= 65) {
//             this.age = age;
//         } else {
//             throw new Error('Incorrect age for work')
//         }
//     }
// }
// let artyom = new Employee;
// artyom.setName('Artyom');
// console.log(artyom.getName());
// artyom.setSalary(25000);
// console.log(artyom.getSalary())
// artyom.setAge(18);
