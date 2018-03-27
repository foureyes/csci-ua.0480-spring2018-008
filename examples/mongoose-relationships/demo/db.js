const mongoose = require('mongoose');
//authors
//books

const BookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  category: {type: String, enum: ['Fiction', 'Non-Fiction'] }
});

const AuthorSchema = new mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
  // books is an array composed of documents that look like
  // BookSchema
  books: [BookSchema]
});

/*
{
  first: Frank
  last: Herbert
  books: [{title: 'Dune'}, {title: 'Children of Dune'}]
}
*/

mongoose.model('Author', AuthorSchema);
const Author = mongoose.model('Author');

/*
const a = new Author({
  first: 'Frank',  
  last: 'Herbert',
  // literal value
  // books: [{title: 'Dune'}]
  // also pass in actual book objects
  // books: [new Book({title: 'Children of Dune'})]
});
*/

// a.books.push({title: 'Dune'});

/*
a.save((err, savedAuthor, count) => {
  if(err) {
    console.log(err); 
  } else {
    console.log(savedAuthor); 
  }
});
*/
/*Author.find({last:'Herbert'}, (err, authors) => {
  console.log('found it!', err, authors);
  authors[0].books.push({title: 'Childen of Dune'});
  authors[0].save((err, savedAuthor) => {
    console.log('err', err);
    console.log('savedAuthor', savedAuthor);
  });
});
*/

// update... key and a value and update that key to the new value
// use operator:  ... something that starts with $... in this case it's push
/*
Author.findOneAndUpdate({last: 'Herbert'}, {$push: {books: {title: 'Dune Messiah'}}}, (err) => {console.log(err)});


Author.findOneAndUpdate({last: 'Herbert'}, {first: 'Ali'}, (err) => {});

*/


mongoose.connect('mongodb://localhost/test');





/*
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
*/

// registration
// 1. take a look at the password (does this meet any criteria)
// 2. generate a salt
// 3. append or prepend salt to password
// 4. hash!
// 5. save both salt and hash in your table / collection


// login
// 1. look up user
// 2. retrieve hash from database
// 3. append or prepend salt to incoming password
// 4. hash it!
// 5. compare hashes!!!!

// {username: jversoza, password: whatevzzzzz}
// abuse their access to the data
// data may be leaked
// if you have backups, backups may be leaked
// breaks into your system and has access to data



// mongoose.connect('mongodb://localhost/');
