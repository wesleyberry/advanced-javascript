// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));
// -------------------------------------------------
function isPalindrome(str) {
    if(str == str.split('').reverse().join('')) {
        return true;
    }
}

console.log(isPalindrome('racecar'));