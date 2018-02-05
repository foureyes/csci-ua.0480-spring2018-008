/*
const y = 24;
function oops() {
  x = 'uh oh!';
}
oops();
console.log(global.x);
*/
/*
const japanese_cat = {nationality: 'japanese'}
const american_cat = {nationality: 'american'}
function speak() {
  if(this.nationality === 'japanese') {
    console.log('nyan'); 
  } else if(this.nationality === 'american') {
    console.log('meow'); 
  } else {
    console.log('default cat sound!'); 
  }
}

japanese_cat.speak = speak;
// japanese_cat.speak();

// speak()
// 1. as a regular function: this will refer to global object
// 2. as a method: this will refer to instance that method is called on
// 3. you can specify what this is using call or apply


speak.call(american_cat);

// bind will create a new function based on the old
// function that it was called ... and it can set the arguments
// of the new funtion
// can fix the "arity" (number of parameters) of a function

not actual syntax.... the concept of [[prototype]]
an object will first try to look for a property defined on itself
if it's not found there, it will look at another object called its
[[prototype]]
this concept of a prototype is essentially a link to some _other_ object
Object.prototype is a built-in object that exists in JavaScript
*/
/*
const person = {first: 'joe', last: 'versoza'};
const other = Object.create(person)
console.log(Object.getPrototypeOf(other) === person);
console.log(other.first);
console.log(other.hasOwnProperty('last'));
*/

/*
function Werewolf(mood) {
  // when used as a constructor (with new)
  // this is bound to an empty object
  // this = {}
  this.mood = mood;
  // implicitly, this is returned
}
// method invocation, this is the instance that method called on
// regular invocation, this is the global object
// call, apply, this is set explicitly
// called as a constructor (with new), this is an empty object


// every function has an _actual property name_ called prototype
// (specifically for constructors)
// it is the object that will be set as the prototype of all
// instances created from this constructor

Werewolf.prototype.howl = function(thing) {
  console.log(this.mood, 'werewolf howls at', thing);
}

const w1 = new Werewolf('happy');
// console.log(w1.mood);
// w1.howl('sun');

function PartyWerewolf() {
   // call super (call the super class constructor)
  // this = {}
  // similar to calling super()
  // Werewolf()
  this.Werewolf()
  Werewolf.call(this, 'really happy');
}

// brings over all of the methods from Werewolf
PartyWerewolf.prototype = Object.create(Werewolf.prototype);

const pw = new PartyWerewolf();
console.log(pw.mood);
*/

/*
class Werewolf {
  // create a function called Werewolf
  constructor(mood) {
    this.mood = mood; 
  }

  // add howl to every instance's prototype (Werewolf.prototype)
  howl(thing) {
    console.log(this.mood, 'werewolf howls at the', thing); 
  }
}
console.log(typeof Werewolf);
const w2 = new Werewolf('sad');
console.log(w2.hasOwnProperty('howl'));

class PartyWerewolf extends Werewolf {
  constructor() {
    super(); // you must call super before using this 
  }

}
*/

/*
// arrow function, this will be the this where the arrow function
// was defined
const obj = {nums: [1, 2, 3, 4], animal: 'owl'}
obj.printCount = function(n) {
  // this is global
  console.log(n, this.animal);
}
obj.count = function() {

  // this is correct
  this.nums.forEach(obj.printCount);
}
obj.count();

*/

protocol, username:password, domain/ipaddress/host, port number (default is 80), path
http://joe:mypassword@foo.bar/baz/qux.html?corge=something#whatever




















































































































