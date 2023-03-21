let arr = [1, 2, 3];

console.log(arr);
console.dir(arr);

console.log(arr instanceof Array);
// class Employee {
//     #name;
//     #salary;

//     constructor(name, salary) {
//         this.#name = name;
//         this.#salary = salary;
//     }
    
//     getName() {
//         return this.#name;
//     }
//     getSalary() {
//         return this.#salary;
//     }
// }
// class EmployeeCollection {
//     #employeers;

//     constructor() {
//         this.#employeers = [];
//     }
//     add(employee) {
//         this.#employeers.push(employee);
//     }
//     show() {
//         for (let elem of this.#employeers) {
//             console.log(elem.getName())
//         }
//     }
//     GetSalarySum() {
//         let sum = 0;
//         for (let employee of this.#employeers) {
//             sum += employee.getSalary();
//         }
//         console.log(sum);
//     }
//     GetAverageSalary() {
//         let res = 0;
//         for (let employee of this.#employeers) {
//             res += employee.getSalary();
//         }
//         res /= this.#employeers.length;
//         console.log(res);
//     }
// }
// let ec = new EmployeeCollection;
// ec.add(new Employee('John', 10000)),
// ec.add(new Employee('Allastor', 15000),)
// ec.add(new Employee('Curt', 30000),)
// ec.add(new Employee('Lilith', 70000),)
// ec.add(new Employee('Sophia', 50000),)
// ec.add(new Employee('Sally', 65000))

// ec.show();
// ec.GetSalarySum();
// ec.GetAverageSalary();
// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }
// class Position {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class department {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let Abnormality_Manager = new Position('clerk');
// let L_Corp = new department('Main branch Lobotomy Corporation');
// let Grade8_Fixer = new Employee('Yuri', Abnormality_Manager, L_Corp);
// console.log(Grade8_Fixer.name, Grade8_Fixer.position.name, Grade8_Fixer.department.name)
// class Validator {
//     isEmail(str) {
//         if (str.endsWith('@mail.ru') || str.endsWith('@bk.ru') || str.endsWith('@gmail.com')) {
//             return 'Email is correct';
//         } else {
//             throw new Error('Incorrect email name');
//         }
//     }
//     isDomain(str) {
//         if ((str.startsWith('http://') || str.startsWith('https://')) && (str.endsWith('.ru') || str.endsWith('.com') || str.endsWith('.net') || str.endsWith('.org'))) {
//             return 'Domain is correct'
//         } else {
//             throw new Error('Incorrect domain name')
//         }
//     }
//     isNumber(str) {
//         if (str == (+str)) {
//             return 'Correct str type - number';
//         } else {
//             throw new Error('Not a Number')
//         }
//     }
// }

// console.log((new Validator).isEmail('ara@mail.ru'));
// console.log((new Validator).isDomain('http://ara-ara.net'));
// console.log((new Validator).isNumber('44000'))
// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

// for (let i = 0; i < users.length; i++) {
//     if (users[i] instanceof Employee) {
//         console.log(users[i].name)
//     }
// }
// class Employee {
//     #name;
//     #salary;
//     #age;
    
//     setName(name) {
//         this.#name = name;
//         return this;
//     }
//     setSalary(salary) {
//         this.#salary = salary;
//         return this;
//     }
//     setAge(age) {
//         if (age > 0 && age <= 120) {
//             this.#age = age;
//             return this;
//         } else {
//             throw new Error('Incorrect age')
//         }
//     }
//     getName() {
//         return this.#name;
//     }
//     getSalary() {
//         return this.#salary + '$';
//     }
//     getAge() {
//         return this.#age;
//     }
//     show() {
//         console.log(this.getName() + ' ' + this.getSalary() + ' ' + this.getAge());
//     }
// }
// let first = new Employee();
// first.setName('Yor').setAge(22).setSalary(50000)
// first.show();
// class Employee {
//     #name;
//     #salary;
//     #age;
//     constructor(name, salary, age) {
//         this.#name = name;
//         this.#salary = salary;
//         this.#age = age;
//     }

//     show() {
//         console.log(this.#name + ' got in previous month: ' + this.#salary + '$. His new salary = ' + this.#SalaryUp() + '$. His age = ' + this.#age + '.');
//     }
//     #SalaryUp() {
//         return this.#salary * 1.1
//     }
// }
// let first = new Employee('john', 30000, 25);
// first.show();
// class Student {
//     name = 'aizen';
//     surn;

//     StudentId() {
//         return this.cape(this.name) + ' ' + this.cape(this.surn);
//     }
//     cape(str) {
//         return str[0].toUpperCase() + str.slice(1);
//     }
// }

// let htf = new Student;
// htf.surn = 'lavent';
// console.log(htf.StudentId())
// class Employee {
//     age;
//     name;
//     salary;

//     work(value) {
//         return 'Made today: ' + value;
//     }
//     show() {
//         console.log(this.name + ' got ' + this.salary +'$' + ' this month');
//     }
// }

// let first = new Employee;
// first.name = 'Алексей';
// first.salary = 60000;
// let second = new Employee;
// second.name = 'Аркадий';
// second.salary = 45000;

// first.show();
// second.show();