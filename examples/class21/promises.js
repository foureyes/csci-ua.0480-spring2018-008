
get
then
then
then



const p1 = new Promise(function(fulfill, reject) {
		xmlhttp request
onload...
    fulfill(1);
on error ...
	reject
});

const p2 = p1.then(function(val) {
    console.log(val);
		return val + 1;
		// outer then will return new promise
		// p2 will also be a promise
    //return new Promise(function(fulfill, reject) {
    //     fulfill(val + 1);    
    //});
});

p2.then(console.log);
