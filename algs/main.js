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
truncateString = (str, num) => num < 3 ? '' : str.substring(0, num - 3) + '...';
console.log(truncateString('A-tisket a-tasket a green and yellow basket', 11));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 14));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 2));
console.log(truncateString('Peter Piper picked a pack of pickled peppers', 3));
// ----------------------------------------------------
chunkArrayInGroups = (arr, size) => {
    let groups = [];
    while(arr.length > 0) {
        groups.push(arr.splice(0, size));
    }
    return groups;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// ----------------------------------------------------
// slasher = (arr, howMany) => {
//     let newArr = [];
//     for(let i = howMany; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
slasher = (arr, howMany) => arr.splice(0, howMany);
console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3, 4, 5, 6], 1));
// ----------------------------------------------------
mutation = arr => {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    // for(let i = 0; i < secondWord.length; i++) {
    //     if(firstWord.indexOf(secondWord[i]) === -1) return false;
    // }
    for(var letter of secondWord) {
        if(firstWord.indexOf(letter) === -1) return false;
    }
    return true;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
// ----------------------------------------------------
bouncer = arr => arr.filter(elem => elem);
console.log(bouncer([7, "ate", "", false, 9]));
// ----------------------------------------------------
function destroyer(arr) {
    var args = Array.from(arguments);

    args.splice(0, 1);
    var targets = args;
    let results = [];

    for(var num of arr) {
        if(targets.indexOf(num) === -1) {
            results.push(num);
        }
    }
    return results;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// ----------------------------------------------------
getIndexToIns = (arr, num) => {
    arr.push(num);
    return arr.sort((a, b) => a - b).indexOf(num);
}
console.log(getIndexToIns([30, 25, 40, 60], 50));
// ----------------------------------------------------
rot13 = str => {

}
console.log(rot13("SERR PBQR PNZC"));