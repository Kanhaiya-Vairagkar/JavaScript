
console.log("Arithmeatic Opearore in JS");

let a = 90;
let b = 90;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a ** b;
let h = a % b;

console.log("Addition : " + c);
console.log("Substraction : " + d);
console.log("Multiplication : " + e);
console.log("Division : " + f);
console.log("Exponential : " + g);
console.log("Modulus : " + h);
console.log("PostIncrement : " + h++);
console.log("PreIncrement : " + ++h);
console.log("PostDecrement : " + h--);
console.log("PreDecrement : " + --h);


console.log("Assignment Opearore in JS");
let m = 90;
let n = 50;
let j = 10;
let k = 10;
m += n
console.log("Addition : " + m);
m -= n
console.log("Subatraction : " + m);
m *= n
console.log("Multiplication : " + m);
m /= n
console.log("Division : " + m);
m **= n
console.log("Exponential : " + m);
m %= n
console.log("Modulus : " + m);


console.log("Compreason Opearore in JS");

let x;
x = 1000;
let y;
y = 5000;
x = y;
console.log(x);
console.log(k == j);

var myVar;
myVar = 54;
var myNum;
myNum = 10;
myNum = myVar;
console.log(myNum);

let v = 984;
let w = 10;
v = w;
console.log(v);

let p = 8040;
var r = '8040';
// p=r;
let q = 90;
console.log(p, r);
console.log(p == r);
console.log(p != r);
console.log(p === r);
console.log(p !== r);
console.log(p < q);
console.log(p > q);

console.log("Logical Operator");
// Logical Operator used for checking the Conditions
let po = 11;
let lo = 10;
console.log((po > lo) && (lo == 10));
console.log((po < lo) || (lo > po));
console.log(po != lo);
console.log(!false); // =>TRUE
console.log(!true);  // =>FALSE


console.log("Ternary Operatore");
const age = 19;
// console.log(age == 90 ? 'Your age is two digit.' : 'Your age is three digit.');

console.log(age>=19 ? 'You can go for Vote' : 'You can not go for Vote');
