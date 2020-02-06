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
titleCase = str => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("hEllo mY name is chicka chicka, slim SHAdy"));
// ----------------------------------------------------
largestOfFour = arr => arr.map(x => Math.max(...x));
console.log(largestOfFour([[4, 5, 1, 4], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// ----------------------------------------------------
confirmEnding = (str, target) => str[str.length - 1] === target;
console.log(confirmEnding('Basian', 'n'));
console.log(confirmEnding('Basian', 't'));
// ----------------------------------------------------
// repeatStringNumTimes = (str, num) => {
//     let value = str;
//     for(let i = 1; i < num; i++) {
//         value += str;
//     }
//     return value;
// };
repeatStringNumTimes = (str, num) => num < 0 ? '' : str.repeat(num); 
console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('+', 10));
// ----------------------------------------------------
truncateString = (str, num) => num < 3 ? '' :str.substring(0, num - 3) + '...';
console.log(truncateString('A-tisket a-tasket a green and yellow basket', 11));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 14));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 2));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 3));
// ----------------------------------------------------