// You cannot reassign a value to a const variable
const particle = {
    x: 100,
    y: 100
}
particle.x = 200;
particle.z = 50;
console.log(particle);

// function definition
// function go() {

// }
// or
// let go = function() {

// }

const go = function() {
    console.log(1);
}
const go = function() {
    console.log(2);
}
go();