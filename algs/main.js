reverseStr = str => str.split('').reverse().join('');
// console.log(reverseStr('Hello'));
// ----------------------------------------------------
factorialize = num => {
    let total = 1;
    for(let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}
// console.log(factorialize(5));
// ----------------------------------------------------
palindrome = str => str === str.split('').reverse().join('');
// console.log(palindrome('racecar'));
// ----------------------------------------------------
findLongestWord = str => str.split(' ').sort((a, b) => b.length - a.length)[0].length;
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ----------------------------------------------------
titleCase = str => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("hEllo mY name is chicka chicka, slim SHAdy"));
// ----------------------------------------------------
largestOfFour = arr => arr.map(x => Math.max(...x));
// console.log(largestOfFour([[4, 5, 1, 4], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// ----------------------------------------------------
confirmEnding = (str, target) => str[str.length - 1] === target;
// console.log(confirmEnding('Basian', 'n'));
// console.log(confirmEnding('Basian', 't'));
// ----------------------------------------------------
// repeatStringNumTimes = (str, num) => {
//     let value = str;
//     for(let i = 1; i < num; i++) {
//         value += str;
//     }
//     return value;
// };
repeatStringNumTimes = (str, num) => num < 0 ? '' : str.repeat(num); 
// console.log(repeatStringNumTimes('*', 3));
// console.log(repeatStringNumTimes('+', 10));
// ----------------------------------------------------
truncateString = (str, num) => num < 3 ? '' : str.substring(0, num - 3) + '...';
// console.log(truncateString('A-tisket a-tasket a green and yellow basket', 11));
// console.log(truncateString('Peter Piper picked a pack of pickled peppers', 14));
// console.log(truncateString('Peter Piper picked a pack of pickled peppers', 2));
// console.log(truncateString('Peter Piper picked a pack of pickled peppers', 3));
// ----------------------------------------------------
chunkArrayInGroups = (arr, size) => {
    let groups = [];
    while(arr.length > 0) {
        groups.push(arr.splice(0, size));
    }
    return groups;
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// ----------------------------------------------------
// slasher = (arr, howMany) => {
//     let newArr = [];
//     for(let i = howMany; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
slasher = (arr, howMany) => arr.splice(0, howMany);
// console.log(slasher([1, 2, 3], 2));
// console.log(slasher([1, 2, 3, 4, 5, 6], 1));
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
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
// ----------------------------------------------------
bouncer = arr => arr.filter(elem => elem);
// console.log(bouncer([7, "ate", "", false, 9]));
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
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// ----------------------------------------------------
getIndexToIns = (arr, num) => {
    arr.push(num);
    return arr.sort((a, b) => a - b).indexOf(num);
}
// console.log(getIndexToIns([30, 25, 40, 60], 50));
// ----------------------------------------------------
rot13 = str => {
    return;
}
// console.log(rot13("SERR PBQR PNZC"));
// ----------------------------------------------------
sumAll = arr => {
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    var total = 0;
    for(let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}
// console.log(sumAll([1, 5]));
// console.log(sumAll([-5, 10]));
// ----------------------------------------------------
diffArray = (arr1, arr2) => {
    let combo = arr1.concat(arr2);
    return combo.filter(num => {
        if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) return num; 
    }).sort((a, b) => a - b);
}
// console.log(diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]));
// ----------------------------------------------------
convertToRoman = num => {
    let romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let roman = '';

    for(var key in romanToNum) {
        while(num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
        }
    }
    return roman;
}
// console.log(convertToRoman(3));
// console.log(convertToRoman(11));
// console.log(convertToRoman(12197));
// ----------------------------------------------------
whatIsInAName = (collection, source) => {
    var arr = [];
    var keys = Object.keys(source);

    return collection.filter(obj => {
        for(var key of keys) {
            if(!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }
            return true;
        }
    });
}
// console.log(whatIsInAName([
//     { first: "Romeo", last: "Montague"}, { first: "Mercutio", last: null}, { first: "Tybalt", last: "Capulet"}
// ], 
//     {last: "Capulet" }
// ));
// --------------------------------------------------------
titleCase2 = str => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// console.log(titleCase2("hEllo MY nAME is ... Chicka Chicka SLIM sHaDy"));
// --------------------------------------------------------
confirmEnding2 = (str, letter) => str[str.length - 1] === letter;
// console.log(confirmEnding2('Basian', 'n'));
// console.log(confirmEnding2('Basian', 't'));
// --------------------------------------------------------
repeatStringNumTimes2 = (str, num) => num > 5 ? str.repeat(num) : null;
// console.log(repeatStringNumTimes2('*', 5));
// console.log(repeatStringNumTimes2('&', 10));
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
let findLongestWordTwo = str => str.split(' ').sort((a, b) => b.length - a.length)[0].length;
// console.log(findLongestWordTwo('The quick brown fox jumped over the red dog'));
// --------------------------------------------------------
let truncateStringTwo = (str, num) => str.substring(0, num);
// console.log(truncateStringTwo('Peter Piper picked a pizza', 5));
// console.log(truncateStringTwo('Peter Piper picked a pizza', 3));
// console.log(truncateStringTwo('Peter Piper picked a pizza', 10));
// --------------------------------------------------------
let getIndexToInsTwo = (arr, num) => {
    arr.push(num);
    return arr.sort((a, b) => a - b);
}
// console.log(getIndexToInsTwo([10, 40, 60, 100, 20], 50));
// --------------------------------------------------------
let mutation2 = arr => {
    let wordOne = arr[0].toLowerCase();
    let wordTwo = arr[1].toLowerCase();
    for(let letter of wordTwo) {
        if(wordOne.indexOf(letter) === -1) return false;
    }
    return true;
}
// console.log(mutation2(['hello', 'hELlO']));
// console.log(mutation2(['yelp', 'hELlO']));
// --------------------------------------------------------
const insertWhitespace = s => s.replace(/([a-z])([A-Z])/g, "$1 $2");