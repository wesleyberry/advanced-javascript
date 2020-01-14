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
function flattenArray(arrays) {
    // return arrays.reduce((a, b) => a.concat(b));

    return [].concat.apply([], arrays);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));