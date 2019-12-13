const obj = {
    x: 1
};
Object.freeze(obj);
// Object.defineProperty(obj, {
//     writable: false
// });
obj['y'] = 2;