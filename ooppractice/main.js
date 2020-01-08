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