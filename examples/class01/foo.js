/*
5 + 5 // --> 10 (number)
true && false // false

function f() {} // ---> you get back an object ('function')



3 ways to declare functions in js:

function declaration syntax
function expression
*/

// 1. function declaration
function foo(a, b) {
  return a + b; 
}


// 2. function expression
//          \/ ----- this is an expression that gives back an object
const bar = function(a, b) {
  return a + b;
}


const lils = ['pump', 'wayne', 'b', 'uzi vert', 'yachty'];
lils.forEach(console.log); // console.log('pump', 0, [...])
lils.forEach(foo);
// how does forEach know to call function passed in with x number of argument
// the only way to tell is to read the docs of the original function that
// takes function as an arg
// it calls console.log on every element in lils


lils.forEach(function(name) { console.log('lil', name)})

















// 3. function expressions with a terser syntax ... arrow functions


(a, b) => { return a + b }
(a, b) => a + b


(x) => { return x * 2}

x => x * 2

























































