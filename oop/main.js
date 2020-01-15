let Employee = function(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;

    this.displayDetails = function() {
        console.log(`${this.name} works as a(n) ${this.position} making $${this.salary} a year.`);
    }
};

let bob = new Employee('Bob', 'Manager', 60000);
let susan = new Employee('Susan', 'Developer', 60000);
let chuck = new Employee('Chuck', 'CEO', 65000);

bob.displayDetails();
susan.displayDetails();
chuck.displayDetails();