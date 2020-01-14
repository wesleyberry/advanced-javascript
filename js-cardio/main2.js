// function longestWord(sen) {
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

//     const sorted = wordArr.sort((a, b) => b.length - a.length);

//     const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

//     return longestWordArr;
// }
// console.log(longestWord('hello there, my name is chicka chicka Slim Shady'));

function chunkArray(arr, len) {
    const chunkedArr = [];
    
    let i = 0;

    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }

    return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));