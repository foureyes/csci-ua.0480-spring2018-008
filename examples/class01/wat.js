
/*
// hoisting
// interpreter will look at all var declarations
// bring those to the top of the execution


console.log(foo);
var foo = 'wat??';
// undefined
//
//
// var foo;
// console.log(foo)
// foo = 'wat??';
//
//
// function declarations are hoisted
// as well as initialization
*/


/*
bar();
function bar() {
  console.log('bar');
}
*/
bar();
const bar = function() {
  console.log('bar');
}














