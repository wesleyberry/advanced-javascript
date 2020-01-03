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
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw();

// -------------------------------
// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('Draw');
//         }
//     };
// }
// const circle = createCircle(1);

// -------------------------------
// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);

// -------------------------------
// let number = 10;
// function increase(number) {
//     number++;
// }
// increase(number);
// console.log(number);

// -------------------------------
// Abstraction
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 };

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };

//     this.draw = function() {
//         computeOptimumLocation();
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if(!value.x || !value.y)
//                 throw new Error('Invalid Location');

//             defaultLocation = value;
//         }
//     });
// }
// const circle = new Circle(10);
// circle.defaultLocation = 1;

// ------------------------------------
// Exercise
// properties = duration, reset(func), start(func), stop(func)

// function Stopwatch() {
//     let startTime, endTime, duration = 0;
//     let running = false

//     this.start = function() {
//         if(!running) {
//             running = true;
//             startTime = new Date().getTime() / 1000;
//             console.log('The clock has started');
//         } else {
//             throw new Error('The clock is already running');
//         }
//     };

//     this.stop = function() {
//         if(running) {
//             running = false;
//             endTime = new Date().getTime() / 1000;
//             const seconds = endTime - startTime;
//             duration += seconds;
//             console.log('The clock has stopped');
//         } else {
//             throw new Error('The clock is already running...');
//         }
//     };

//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {

//     });
// }


// const sw = new Stopwatch();
// sw.start();
// sw.stop();

// ---------------------------------------------------------

let b = {
    x: 100,
    y: 50,
    display: function() {
        console.log(this.x);
    }
};

// vs

function Bubble(x, y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        console.log(this.x);
    }
}

let bubble1 = new Bubble(100, 50);
bubble1.display();