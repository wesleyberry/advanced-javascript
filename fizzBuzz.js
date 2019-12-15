// let fizzBuzz = function(str1, str2, n1, n2) {
//     let arr = [];
//     for( let i = n1; arr.length < n2; i++ ) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             arr.push(str1 + str2);
//         } else if(i % 3 === 0) {
//             arr.push(str1);
//         } else if(i % 5 === 0) {
//             arr.push(str2);
//         } else {
//             arr.push(i);
//         }
//     }    
//     return arr;
// }

// console.log(fizzBuzz("hello", "Goodbye", 10, 150));


var arr = [];
function FizzBuzz() {
    for( let i = 1; i < 101; i++) {
        if( i % 3 === 0 && i % 5 === 0 ) {
            arr.push('Fizz Buzz');
        } else if( i % 3 === 0 ) {
            arr.push('Fizz');
        } else if( i % 5 === 0 ) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }
    return arr;
}

console.log(FizzBuzz());