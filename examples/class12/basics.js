/*
javascript also works this way
same semantics as java

java
pass by value

ruby
pass by reference

 */

const a = [];
// we're getting the reference to this object
// it's mutable
function modify(arr) {
  // using var or nothing will mask parameter
  // (override a variable in the local scope )
  // var arr
  // arr = [1, 12, 3] // also will overwrite
  
  // using const will prevent you from overriding
  // parameter (this will cause an error)
  // const arr = [1, 2, 3];
  
  // this mutates a
  arr.push(5)
}
modify(a);
console.log('inital a', a)
// console.log('arr', arr)











