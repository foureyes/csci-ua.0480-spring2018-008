/*
a prototype is an object that another object will look for properties on
(if that prop doesn't exist on itself)

every object will have some other object as its prototype (that could be any obj or..
null)

null doesn't have a prototype (end of prototype chain)

chain object together for property look up purposes
 */

/*
{} any old object ... it's prototype will be "Object.prototype"
Object.getPrototypeOf(...) === ...

  [1, 2, 3] --> Array.prototype --> Object.prototype
  */

class Foo {
  // this.whatever <-- don't do this... if you want instance variable
  // place it in constructor
  constructor() {
    this.whatever <--- show up on instance (hasOwnProperty is true)
    // you can define a method in constructor, but it will exist for
    // every instance. instead, define method as shown below (will
    // be placed in instance's [[prototype]], Foo.prototype, rather than on
    // instance itself
    this.f = function() {}
  }

  g() { 
    // this is a method
    // it'll be placed in Foo.prototype
    // Foo.prototype.g
  }
}
