reverseStr = str => str.split('').reverse().join('');
console.log(reverseStr('Hello'));
// ----------------------------------------------------
factorialize = num => {
    let total = 1;
    for(let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}
console.log(factorialize(5));
// ----------------------------------------------------
palindrome = str => str === str.split('').reverse().join('');
console.log(palindrome('racecar'));
// ----------------------------------------------------
findLongestWord = str => str.split(' ').sort((a, b) => b.length - a.length)[0].length;
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ----------------------------------------------------
titleCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
console.log(titleCase("I'm a little tea pot"));