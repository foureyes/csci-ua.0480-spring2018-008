/*
promises - objects that represent some sort of async task

* reading a file
* writing to a database
* getting dta from a url

bcuz it's an async task, it can be in one of three states:

1. pending (not yet done)
2. resolved (completed successfully)
3. rejected (completed, but not good... like an error)
*/
/*
promise constructor has single argument

* it's a function! executor
* it also has two parameters that are also functions
*/
const p = new Promise((fulfill, reject) => {
  // guaranteed to run only after promise object is created
  fulfill('done!!!!!');
  // reject('oops!');
  // executes some async task
  // when task completes successfully, call fulfill with some result of task
  // otherwise call reject, with some message / error
});
// promise object has a method called then
// it sets the fulfill and reject of the executor
// 1st arg is fulfill
// 2nd arg sets reject
// then always returns a promise
// p.then(console.log, console.log.bind(null, 'ERROR'));
/*
const p2 = p.then((val) => {
  console.log(val);
  return new Promise((fulfill, reject) => {
    fulfill(val + ' done some more....(from 2nd promnise'); 
  });
});
*/
/*
const p2 = p.then((val) => {
  console.log(val);
  // NOT A PROMISE, but it's wrapped in one
  return val + ' done some more ... from 2nd promise';
});
p2.then(console.log);
*/


































