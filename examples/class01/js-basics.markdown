javascript

* dynamically typed
	* you don't have to specify type when declaring variable
	* inferred during runtime
	* (can't know during compile)
* weakly typed
	* it shifts between types without causing errors usually

"yachty"
12
{}
function foozy() {}
true

types in js
====
* string
* int (????)
* object
* function
* boolean

const, let
=====
const variables cannot be reassigned
const x = 5;
x = 7; // bad!
const arr = [0, 1];
arr[0] = 23; // ok

const declared variables are not immutable
however, you can't take that name and assign a different value to it

you have to assign a value to a const declared variable
const something; // error!!!






using let, however, lets you do reassignment
let x = 5;
x = 'this thing'; // ok!

let y;
console.log(y) // undefined (but that's ok)




don't use var
var







































