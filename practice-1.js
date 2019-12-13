let startAt = performance.now();

const age = 20 + "";
console.log(typeof age);
// ---------------------------------
const users = Array(5).fill("");
console.log(users);
// ---------------------------------
const people = ["Ed", "Traversy Daddy", "th unemployed tech lead", "John Dough", "Anna", "John Dough"];
const unique = Array.from(new Set(people));
console.log(unique);
// ---------------------------------
const dynamic = 'hobbies';
const individuals = {
    name: 'Ed',
    email: 'deved@aol.com',
    [dynamic]: 'sleep'
};
console.log(individuals);
// ---------------------------------
const serpents = [1,2,3,4,5,6,7];
const serpentsObject = {...serpents};
console.log(serpentsObject);
// ---------------------------------
const individualsArray = Object.values(individuals);
console.log(individualsArray);
// ---------------------------------

let endAt = performance.now();
console.log(`took ${endAt - startAt} milliseconds to execute`);