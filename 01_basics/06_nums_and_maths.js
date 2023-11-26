const score = 500;
const balance = new Number(score)

console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const otherNumber = 23.46744
console.log(otherNumber.toPrecision(3))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++ MATHS +++++++++++++++++++

console.log(Math)
console.log(Math.abs(-56));
console.log(Math.round(5.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,2,11,0,-445,11,45,66,78));
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 - 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);