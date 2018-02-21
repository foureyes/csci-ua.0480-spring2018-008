const express = require('express');
const app = express();
const path = require('path');


// middleware is just a function
// it's called before / after routes
// it takes 3 arguments: req, res, next
//  * req .... the request coming in
//  * res .... the response object to send back a response
//  * next .... the next middleware function to call (or the next route)
// to activate middlware
// call app.use

function hello(req, res, next) {
  console.log('hello');
  next();
  //res.send('no other paths will work, middleware has taken over!');
}
// express static middleware:
  // does req.url exist in public folder?
  // if it does res.sendFile(that file)
  // else... next()

// auth as practical example:
  // check auth.. if fail
  // res.send('failure')
  // else
  // next...

// activate middleware
app.use(hello);

// on POST requests, form data comes through
// in request body... the format is usually name=val&name=val
// which manifests itself in the property req.body
// this basically gives us req.body
app.use(express.urlencoded({extended: false}))

// express static is middleware
// a function that runs before
// or after the routes that you 
// defined with app.get / app.post
// intercept a request
// check if that path exists on
// the file system
// serve it if id does
// otherwise... continue to routes

app.set('view engine' , 'hbs');

// activate middleware function
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const catObjects = [
  {name:'bill furry', lives: 4},
  {name:'katy purry', lives: 9},
  {name:'paw newman', lives: 2},
  {name:'chairman meow', lives: 1}
];

// GET to read values 
// (searching, filtering, etc.)
// POST to create new resources
// (creating a new user session
// adding data to a data store
// etc.)


app.get('/cats', (req, res) => {
  // access query string parameters
  // by using req.query
  // req.query will contain the parsed query string parameters
  // ?name1=val1&name=val2
  // req.query will contain req.query.name1, req.query.name2 where their values are
  // the associated values from the query string parameters
  const minLives = +req.query.lives || 0;
  res.render('cats', {allCats: catObjects.filter(c => c.lives >= minLives)});
});

app.post('/cats', (req, res) => {
  const newCat = {name: req.body.name, lives: req.body.lives};
  catObjects.push(newCat);
  // PRG - post redirect get
  res.redirect('/cats');
  // render not great because of refresh issue
  // and repeated logic
  //res.render('cats', {allCats: catObjects});
  //
  //
  // however... if you want to send an error message back
  // one way to do that is to render on post
  // res.render('cats', {errors: {...}})
});


app.get('/', (req, res) => {
/*
  req.url
  req.ip_address
  req.query
  req.body
  */
  // res allows to send back an http response
  // res.send('this is a response');
  res.render('index', {foo: 'bar', 'baz': 'qux'});
});


app.listen(3000);





