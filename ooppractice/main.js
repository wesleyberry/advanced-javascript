// Question one
// function checkTwoNums(a, b) {
//     if(a + b === 100) {
//         return true;
//     } 
//     if(a === 100 || b === 100) {
//         return true;
//     }
// }

// console.log(checkTwoNums(100, 99));

// Write a JS program to get the extension of a filename
const getFileExtension = str => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.json'));

// Replace every character in a given string with the character following it in the alphabet.
const moveCharsForward = str => 
    str.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

console.log(moveCharsForward('abcd'));

// Write a JS program to get the current date
// const formatDate = (date = new Date()) => {
//     const days = date.getDay() + 1;
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`;
// }

// console.log(formatDate());

// Add 'New!' in front of given string. if it begins with 'new', already return the string
const addNew = str => str.indexOf('New!') === 0 ? str : `New! ${str}`;

// console.log(addNew('New! Offers'));

let formatDate = (date = new Date()) => {
    let day = date.getDay() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
console.log(formatDate());