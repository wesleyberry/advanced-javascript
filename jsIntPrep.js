// Difference between var and let
// Let requires an assignment when it is declared; let is newer; Let has a block scope; let does NOT get hoisted
// Var does not require an assignment when declared; var has been around much longer; Var has function scope; var gets hoisted
// Example
let func = function() {
    if(true) {
        var v = 1;
        let l = 2;
    }
    console.log(v);
    // console.log(l);
}
func();

// Difference between === and ==
// == will coerce the type; only compares value
// === is strict to type; compares value and type

// Difference between let and const
// cannot reassign a value to const
// Can reassign and change type of let

// Difference between null and undefined
// null is an object
// undefined is assigned to a variable that has no assignment or placeholder; value of undefined is undefined

// Use of arrow function
// Arrow functions to do not have their own this

// What is prototypal inheritance
// Every object has an property called prototype, and the new object will inherit the properties of the parent

// Difference between function declaration and function expression
// Function declaration is not assigned to a variable; can be called before it is created
// Function expression is when a function is assigned to a variable; can not be called before it is created; has variable scope

// What is a promise and why do we use it?
// Promises indicate an eventual completion or failure of an asynchronous process
// More readable than callbacks
// Easier to handle errors
var promise1 = new Promise(function(resolve, reject) {
    resolve($.ajax('a.json'));
});

promise1.then(function(r) {
    return new Promise();
}).then(function(result) {
    $('#div1').html(result);
});

// 
setTimeout(function() {
    console.log('a');
}, 0);
console.log('b');
console.log('c');

// What is closure and how do we use it?
// Closure occurs when a function is nested within another function. The inner function will add closure to the outer function's execution context.
// 
let obj = function() {
    let i = 0; 

    return {
        setI(k) {
            i = k;
        },
        getI() {
            return i;
        }
    }
};

let x = obj();
x.setI(2);
console.log(x.getI());