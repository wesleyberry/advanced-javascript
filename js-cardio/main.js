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

function capitalizeLetters(str) {
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substring(1))
    //     .join(' ');
return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
});
}
console.log(capitalizeLetters('i love javascript'));
// ---------------------------------------------------
