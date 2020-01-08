// Question one
function checkTwoNums(a, b) {
    if(a + b === 100) {
        return true;
    } 
    if(a === 100 || b === 100) {
        return true;
    }
}

console.log(checkTwoNums(100, 99));