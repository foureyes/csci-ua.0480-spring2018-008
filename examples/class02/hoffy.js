/*
function double(nums) {
  for(let i = 0; i < nums.length; i++) {
    console.log(2 * nums[i]);
  }
}

double([1, 2, 3, 4]);

function decrement(nums) {
  for(let i = 0; i < nums.length; i++) {
    console.log(nums[i] - 1);
  }
}

decrement([1, 2, 3, 4]);
*/

// THIS IS A HIGHER ORDER FUNCTION
// (A FUNCTION THAT EITHER TAKES A FUNCTION(S) AS AN ARGUMENT
// OR RETURNS A FUNCTION... OR BOTH!)

function forEach(arr, f) {
  for(let i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}

/*
function doubleIt(n) {console.log(n * 2)}
forEach([1, 2, 3, 4], doubleIt);
forEach([1, 2, 3, 4], console.log);
forEach([1, 2, 3, 4], function(n) {console.log(n - 1)});
*/


// map will take an array
// give back a new array
// based on a transformation function
// transform will be called on every element in the old array

function map(arr, transform) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(transform(arr[i]));
  }
  return newArr;
}

//console.log(map([1, 2, 3, 4], x => x * x));

// filter
// take an array of values
// call a function on each value
// if the result is true, add it to an array
// return a new array

function filter(arr, f) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    // if our filter test is true
    // then add element to new arr
    if(f(arr[i])) {
      filteredArr.push(arr[i]);
    }
    // if it's not true, ignore it
  }
  return filteredArr;
}

//console.log(filter([1, 2, 3, 4], x => x % 2 == 0)); // [2, 4]
//console.log(filter([1, 2, 3, 4], x => x >= 2)); // [2, 3, 4]

// give a function that adds some number to an argument
function makeAdder(initialNumber) {
  // initialNumber is in scope
  // this is a closure
  // an object that represents
  // a function and the environment that it was created in
  return function(n) {
    return initialNumber + n; 
  }
}

/*
const addFive = makeAdder(5);
const addTen = makeAdder(10);
// what type is addFive???
// it's a function
console.log(addFive(3));
console.log(addTen(1));
*/

// decorator pattern
// you take a function
// modify it somehow (without changing source code of original function)
// give back new modified function

function fact(n) {
  let product = 1;
  for(let i = 1; i <= n; i++) {
    product = product * i; 
  }
  return product;
}


// it'll take a function
// give back a new function
// however new function will cache results of itsj computations
// so that if same arguments arej passed in
// then calc won't occur, and cached version will be returned
function cachify(oldFun) {
  const cache = {};

  // rest operator
  // take positional args and turn then into array
  function newFun(...args) {
  // function newFun(n) {
    // make arguments array into a string
    // to act as key
    // args is an array
    
    
    /*
    cache[2, 3]
    cache['2, 3']
    cache[[1, 2, 3]]
    cache['[1, 2, 3]']
    */

    const k = JSON.stringify(args);
      
    if(cache.hasOwnProperty(k)) {
      console.log('cache hit', k, cache[k]);
      return cache[k]; 
    } else {
      // spread operators takes array, and breaks it up
      const val = oldFun(...args); 
      cache[k] = val;
      console.log('cache missed');
      return val;
    }
  }
  return newFun;
}

const newFact = cachify(fact);

console.log(newFact(4));
console.log(newFact(4));









































































