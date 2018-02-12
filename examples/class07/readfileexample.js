/* it will replace a secret with the 'SECRET' within the contents of a file */
const fs = require('fs');
class RedactedFile {
  constructor(fileName, word) {
    this.fileName = fileName;
    this.word = word;
  }

  printFile() {
    // what do think "this" will be in printFile????
    // when called as below, this will be rf
    //
    // read the file... and then print it out
    // farm out the printing to a method
    // this.fileName ... sensitiveData.txt
    // fs.readFile(this.fileName, this.handleRead); 
    // fs.readFile(this.fileName, this.handleRead.bind(this)); 
    // const arg1 = 'foo'
    const contentType = 'figure it out!'
    
    fs.readFile(this.fileName, (err, data) => {this.handleRead(contentType, err, data);}); 




    
    // this within arrow function will be whatever this is/was when arrow
    // function was created
  }

  handleRead(arg1, err, data) {
    // convert to string
    let s = data + '';
    // let's try to replace every occurrence of this.word!
    // this isn't set to instance for this.word
    // this usually would be set to global object when regular function all
    // within ES6 classes, "strict mode" is enabled ^ prevents this from 
    // happening, buuuuut.... instead you get error
    const replacementPattern = new RegExp(this.word, "g");
    s = s.replace(replacementPattern, 'SECRET');
    // print out the result
    console.log(s);
  }
}
const rf = new RedactedFile('/tmp/sensitiveData.txt', 'pizza') ;
rf.printFile();












