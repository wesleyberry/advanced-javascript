let numArr = [5, 1, 10, 15, 12];
let wordArr = ['juice', 'apple', 'carrots', 'oranges'];

let sortNums = arr => {
    return arr.sort((a, b) => a - b);
}
console.log(sortNums(numArr));

let sortWords = arr => {
    return arr.sort();
}
console.log(sortWords(wordArr));

let addNums = arr => arr.reduce((a, b) => a + b);
console.log(addNums(numArr));