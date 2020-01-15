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

numArr.forEach(num => console.log(num));

let atleastTen = numArr.filter(num => num >= 10);
console.log(atleastTen);

let mutiplyByTwo = numArr.map(num => num * 2);
console.log(mutiplyByTwo);