logThis = () => console.log(this);
function logThisAgain() {
    console.log(this);
}

logThis();
logThisAgain();

const obj = {
    me: 1,

    logThisTwice: function() {
        console.log(this);
    }
}
obj.logThisTwice();