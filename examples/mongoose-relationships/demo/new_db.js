const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  category: {type: String, enum: ['Fiction', 'Non-Fiction'] },
  // ref the name of the model that this is related to
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'}
});

const AuthorSchema = new mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
});

mongoose.model('Author', AuthorSchema);
mongoose.model('Book', BookSchema);
const Author = mongoose.model('Author');
const Book = mongoose.model('Book');

//(new Author({first: 'Frank', last: 'Herbert'}).save())
/*
Author.find({first: 'Frank'}, (err, authors) => {
  console.log('finding author', authors, authors[0]._id);
  const b = new Book({
    title: 'Dune', 
    author: authors[0]._id
  });
  b.save((err, book) => {
    console.log(err, book);
  });
});
*/
/*
Book.find({title: 'Dune'}, (err, book) => {
  console.log(err);
  console.log(book.title);
  // nested find
});
*/

Book.find({title: 'Dune'}).populate('author').exec((err, result) => {console.log(err, result);});



/*
{
  first: Frank
  last: Herbert
  books: [{title: 'Dune'}, {title: 'Children of Dune'}]
}
*/


mongoose.connect('mongodb://localhost/test');

