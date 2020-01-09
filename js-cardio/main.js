// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));
// -------------------------------------------------

// function isPalindrome(str) {
//     if(str == str.split('').reverse().join('')) {
//         return true;
//     }
// }

// console.log(isPalindrome('racecar'));
// -------------------------------------------------

// function reverseInt(int) {
//     return parseInt(
//         int.toString()
//         .split('')
//         .reverse()
//         .join('')
//         ) * Math.sign(int);
// }
// console.log(reverseInt(-10009));
// -------------------------------------------------

// function capitalizeLetters(str) {
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substring(1))
    //     .join(' ');
// return str.replace(/\b[a-z]/gi, function(char) {
//     return char.toUpperCase();
// });
// }
// console.log(capitalizeLetters('i love javascript'));
// ---------------------------------------------------

// function maxCharacter(str) {
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';

//     str.split('').forEach(char => {
//         if(charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     });

//     for(let char in charMap) {
//         if(charMap[char] > maxNum) {
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return charMap;
// }
// console.log(maxCharacter('javascript'));
// ------------------------------------------------------

// function fizzBuzz() {
//     let arr = [];
//     for(let i = 1; i <= 100; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             arr.push('Fizz Buzz');
//         } else if(i % 3 === 0) {
//             arr.push('Fizz');
//         } else if(i % 5 === 0) {
//             arr.push('Buzz');
//         } else {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(fizzBuzz());
// -----------------------------------------------------------------------------

// Reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello world'));
// ----------------------------------------------------

// function isPalidrome(str) {
//     if(str === str.split('').reverse().join('')) {
//         return true;
//     }
//     return false;
// }
// console.log(isPalidrome('racecat'));
// -----------------------------------------------------

// function reverseInt(int) {
//     return parseInt(
//         int.toString()
//         .split('')
//         .reverse()
//         .join('')
//         );
// }
// console.log(reverseInt(19005));
// -------------------------------------------------------

// function capitalizeLetters(str) {
//     return str.toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substring(1))
//     .join(' ');
// }
// console.log(capitalizeLetters('i love javascript'));
// --------------------------------------------------------

// function fizzBuzz() {
//     let arr = [];
//     for(let i = 1; i <= 100; i++) {
//         if(i % 15 === 0) {
//             arr.push('Fizz Buzz');
//         } else if(i % 3 === 0) {
//             arr.push('Fizz');
//         } else if(i % 5 === 0) {
//             arr.push('Buzz');
//         } else {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(fizzBuzz());