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