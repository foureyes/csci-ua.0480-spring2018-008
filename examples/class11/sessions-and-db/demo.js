// mongoose
// object document mapper
// it will map a native javascript object to a document in mongodb
// before it can do this, you have to tell mongoose the data that you'll
// store in every document
const mongoose = require('mongoose');
// store snakes
// name, that is a string
// venomous, that is a boolean

// to define the above, use a schema
const SnakeSchema = new mongoose.Schema({
  // field names are fields names in all documents in this collection
  // values are the types of those fields
  name: String,
  venomous: Boolean
});

// make mongoose aware of this schema
// give it a name and the associated schema
// this can be used to fetch a constructor later
mongoose.model('Snake', SnakeSchema);

// to get the constructor, usew same method with one arg
const Snake = mongoose.model('Snake');
// Snake will be the constructor

/*
const s = new Snake({
  name: 'Reese Slitherspoon',
  venomous: false
});

// save into the db
// callback is because saving is async
// if you want to do something after save, then put
// it in callback
s.save((err, savedSnake, count) => {
  console.log('saved snake', savedSnake);
});
*/

Snake.find({}, (err, snakes, count) => {
  // snakes is result of query
  console.log('FOUND!', snakes);
});

// database connection string is protocol, host, db name
mongoose.connect('mongodb://localhost/idk');

// db operations are queued until connect occurs
// alternative is to pass callback to connect


































