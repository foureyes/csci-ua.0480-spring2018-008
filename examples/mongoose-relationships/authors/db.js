const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  category: {type: String, enum: ['Fiction', 'Non-Fiction']}
}); 

const AuthorSchema = new mongoose.Schema({
  first: {type: String, required: [true, 'must have first'], minlength: 1},
  last: {type: String, required: [true, 'must have last'], minlength: 1},
  books: [BookSchema]
});


mongoose.model('Book', BookSchema);
mongoose.model('Author', AuthorSchema);

const Book = mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author', AuthorSchema);


mongoose.connect('mongodb://localhost/test');

/*
// embedded
//
const BookSchema = new mongoose.Schema({
  title: String,
  category: {type: String, enum: ['Fiction', 'Non-Fiction']}
}); 

const AuthorSchema = new mongoose.Schema({
  first: {type: String, required: [true, 'must have first'], minlength: 1},
  last: {type: String, required: [true, 'must have last'], minlength: 1},
  books: [BookSchema]
});


mongoose.model('Book', BookSchema);
mongoose.model('Author', AuthorSchema);

const Book = mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author', AuthorSchema);
*/

/*
// books... array with object literals
//
const author = new Author({
  first: 'Frank',
  last: 'Herbert',
  books: [{title: 'Dune', category: 'Fiction'}]
});

author.save((err, savedAuthor) => {
 console.log(savedAuthor); 
});
*/
/*
// check out this validation (note the enum is incorrect)
const author = new Author({
  first: 'Frank',
  last: 'Herbert',
  books: [{title: 'Dune', category: 'blah'}]
});

author.save((err, savedAuthor) => {
  if(err) {
    console.log(err); 
  } else {
    console.log(savedAuthor); 
  }
});
*/

/*
// can also use new in array of books instead of object literal
const author = new Author({
  first: 'Frank',
  last: 'Herbert',
  books: [new Book({title: 'Dune', category: 'Fiction'})]
});

author.save((err, savedAuthor) => {
 console.log(savedAuthor); 
});

*/

/*
.. can also push, then save
const author = new Author({
  first: 'Frank',
  last: 'Herbert',
});

author.books.push(new Book({title: 'Dune', category: ['Fiction']}));
author.books.push(new Book({title: 'Children of Dune', category: ['Fiction']}));
author.save((err, savedAuthor) => {
 console.log(savedAuthor); 
});
*/

/*
// finally, finding and updating
Author.find({last: 'Herbert'}, (err, authors, count) => {
  authors[0].books.push({title: 'Dune Messiah'});
  authors[0].save();
});
*/
/*
Author.findOneAndUpdate({last: 'Herbert'}, {$push: {books: {title: 'MOAR DUNE'}}}, (err, author, count) => {
  console.log(author);
});
*/
/*
const AuthorSchema = new mongoose.Schema({
  first: {type: String, required: [true, 'must have first'], minlength: 1},
  last: {type: String, required: [true, 'must have last'], minlength: 1},
});

const BookSchema = new mongoose.Schema({
  title: String,
  category: {type: String, enum: ['Fiction', 'Non-Fiction']},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'}
}); 

mongoose.model('Book', BookSchema);
mongoose.model('Author', AuthorSchema);

const Book = mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author', AuthorSchema);
*/

/*
const a = new Author({
  first: 'Frank',
  last: 'Herbert'
});

a.save();
*/

/*
Author.findOne({last: 'Herbert'}, (err, author) => {
  const b = new Book({
    title: 'Dune',
    category: 'Fiction',
    author: author._id
  });
  b.save();
});
*/

/*
Author.findOne({last: 'Herbert'}, (err, author) => {
  const b = new Book({
    title: 'Children of Dune',
    category: 'Fiction',
    author: author._id
  });
  b.save();
});
*/
/*
// ugh
Book.findOne({title: 'Dune'}, (err, book, count) => {
  console.log(book.title);
  Author.findOne({_id: book.author}, (err, author, count) => {
    console.log(author.first); 
  });
})
*/
/*
Book.findOne({title: 'Dune'}).populate('author').exec((err, book) => {
  if(err) {
     console.log(err);
  }
  console.log(book.title, book.author.first);
});
*/
// Book.find().sort('-title').exec((err, books) => {console.log(books.reduce((acc, ele) => acc + ele.title + '\n', ''));});




// exec


