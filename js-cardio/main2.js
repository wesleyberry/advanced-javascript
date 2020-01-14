// function longestWord(sen) {
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

//     const sorted = wordArr.sort((a, b) => b.length - a.length);

//     const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

//     return longestWordArr;
// }
// console.log(longestWord('hello there, my name is chicka chicka Slim Shady'));
// --------------------------------------------------------------------------------
// function chunkArray(arr, len) {
    // SOLUTION 1
    // const chunkedArr = [];
    
    // let i = 0;

    // while(i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i + len));
    //     i += len;
    // }

    // return chunkedArr;

    // SOLUTION 2
//     const chunkedArr = [];

//     arr.forEach(val => {
//         const last = chunkedArr[chunkedArr.length - 1];

//         if(!last || last.length === len) {
//             chunkedArr.push([val]);
//         } else {
//             last.push(val);
//         }
//     });
//     return chunkedArr;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// --------------------------------------------------------------------------------
// function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => a.concat(b));

    // SOLUTION 2
    // return [].concat.apply([], arrays);

    // SOLUTION 3
//     return [].concat(...arrays);
// }
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
// ---------------------------------------------------------------------------------
// function isAnagram(str1, str2) {
//     return formatStr(str1) === formatStr(str2);
// }
// function formatStr(str) {
//     return str
//         .replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }
// console.log(isAnagram('Dormitory', 'dirty room##'));
// ----------------------------------------------------------------------------------
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    
    return newStr;
}
console.log(letterChanges('Hello Therez'));