console.log("Welcome to tutorial number 23");
let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34,234, 2342,34);
z = Math.max(2, 3, 34,234,34);
z = Math.random();
z = 100*Math.random()
z = Math.ceil(50 + (100-50)*Math.random())
// a = (0, 1)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100 - 10)
console.log(z);

// ----------------------------------------------------------------

console.log("Welcome to tutorial 24");

let today = new Date();
// console.log(typeof today);
let otherDate = new Date('1-29-2022 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
 a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
 
 