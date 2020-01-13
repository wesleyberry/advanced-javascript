// Always declare variables
let test = function() {
    num = 1;
}

// Use === instead of ==

// Use semicolons

// Use delete properly; use it to delete property from an object
let obj = {
    first: "one",
    second: "two"
};

delete obj.first;
console.log(obj);

// -----------------------------------------------------------------------

// Avoid Global Variables

// Don't use eval(); it's slow

// Don't use with()

// Avoid setting variables to undefined

// Avoid using new with JavaScript objects

// let str = new String("string");
// Don't do this ^
// Do this
let str = "string";
let test2;
console.log(test2);