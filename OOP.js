// Encapsulation
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overTime * rate);
// }
// vs
// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// employee.getWage();

// -------------------------------
// Simple object...
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};
circle.draw();

// -------------------------------
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');
        }
    };
}
const circle = createCircle(1);

// -------------------------------
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);