"use strict";
console.log('generics');
function printValue(x) {
    console.log('x ===', x);
    return x;
}
const sk = printValue(50);
const str = printValue('labas');
const strArr = printValue(['blue', 'green', 'red']);
function getTupleFromValues(x, y) {
    console.log(`making tuple from ${x} and ${y}`);
    return [x, y];
}
const t1 = getTupleFromValues('blue', 300);
const t2 = getTupleFromValues(50, '300');
t2[1].toUpperCase();
//# sourceMappingURL=generics.js.map