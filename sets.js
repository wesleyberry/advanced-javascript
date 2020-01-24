// var names = new Set();

// names.add('Shaun').add('Ryu').add('Crystal');
// names.delete('Crystal');
// console.log(names.has('Ryu'));

// console.log(names.size);

// console.log(names);

var ninjas = ['Shaun', 'Crystal', 'Yoshi', 'Ryu', 'Yoshi', 'Ryu'];
var refinedNinjas = new Set(ninjas);
console.log(refinedNinjas);
var ninjas = [...refinedNinjas];
console.log('ninjas: ' + ninjas);

var cats = ['Sully', 'Joey', 'Winston', 'Lucille', 'Joey', 'Winston'];
var refinedCats = new Set(cats);
var catsArr = [...refinedCats];
console.log(catsArr);