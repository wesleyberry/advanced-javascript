let add = function(c) {
    console.log(this.a + this.b +c);
};

let obj = {
    a: 1,
    b: 2
};

add.call(obj, 3);
// -------------------------------------------------

let argsToArray = function() {
    console.log([].slice.call(arguments));
};

argsToArray(1, 2, 3);
// -------------------------------------------------

let mammal = function(legs) {
    this.legs = legs;
};

let cat = function(legs, isDomesticated) {
    mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
console.log(lion);
// -------------------------------------------------

let numArray = [1, 2, 3];

// console.log(Math.min(1, 2, 3));\
console.log(Math.min.apply(null, numArray));
// -------------------------------------------------

let button = function(content) {
    this.content = content;
};

button.prototype.click = function() {
    console.log(`${this.content} clicked`);
};

let newButton = new button('add');

let looseClick = newButton.click.bind(newButton);

looseClick();
// --------------------------------------------------

let myObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log('parse called');
    },
    render() {
        this.asyncGet(function() {
            this.parse();
        }.bind(this));
    }
};

myObj.render();