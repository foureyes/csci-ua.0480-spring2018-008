/*
mongoose
object document  mapper

it's going to give you plain javascript objects that map to actual object (documents) in
your database

creating schemas and models
schema... as the blueprint or layout for every document
model... as a constructor based on that blueprint

 */
const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  // pass in object that describes
  // the key value pairs in every game document
  // (every doc in the games collection)
  name: String,
  rating: Number
});

// create model / constructor based on GameSchema
// collection will be lowercase, plural version of first arg
mongoose.model('Game', GameSchema); // register
const Game = mongoose.model('Game'); // retrieve

const g = new Game({
  name: 'Civilizations VI',
  rating: 9
});
/*
g.save(function(err, thingThatWasSaved, count) {
  // if you want to make sure that something happens
  // after save / write to database... then you must
  // put it in callback
  console.log(thingThatWasSaved);
  console.log('this occurs after object was saved to db');
  // in the context of express
  // render or redirect or any response action dep on this save
 // must go in callback
});
*/

// will behave like commandline find, except, pass a callback of course as second arg
Game.find({rating: 9}, function(err, resultOfQuery, count) {
  console.log('found', resultOfQuery);
  // res.render('games', {games: resultOfQuer})
});

mongoose.connect('mongodb://localhost/hw04');
















































































