import * as _ from 'lodash';
// Types
let lucky;

lucky = '23';
lucky = 23;

type Style = 'bold' | 'italic' | 23;

let font: Style;

// --------------------------------------------------------
// Interfaces
interface Person {
    first: string;
    last: string;
}

const person: Person = {
    first: 'Wesley',
    last: 'Berry'
}

// --------------------------------------------------------
// Functions
function pow(x: number, y: number): void {
    return Math.pow(x, y).toString;
}

pow(23, 10);

// --------------------------------------------------------
// Strong typing an array
const arr: number[] = [];

arr.push(1);
arr.push('23');
arr.push(false);

// --------------------------------------------------------
// TypeScrypt Generics

class Observable<T> {
    constructor(public value: T) {

    }
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);