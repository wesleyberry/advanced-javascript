let myFunc = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if(a === 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

myFunc.then(message => console.log(message))
    .catch(message => console.log(message))