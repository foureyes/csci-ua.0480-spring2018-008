const express = require('express');
const app = express();
app.set('view engine', 'hbs');

const session = require('express-session');

// example serving static files
// examines request path
//   if path exists on file system (under public or whatever is configured)
//     go ahead and read the contents and send back an appropriate response
//     /ccs/base.css
//     public/css/base.css
//     send a response with text/css as the content type and the body as 
//     as the content of file
//   otherwise (does not exist)
//     go to different route
//     /form
//     ....go find the next route that matches /form
// body parser
//    parses the request bad into a variable available on the request object
//    when you submit a form that causes a post
//    the defaul format will take form element inputs (by name)
//    and their values... and drop into request body:
//
//    name1=value1&name2=value2...
//
//    make ^^^^^ available as simply req.body.name1   req.body.name2
//    (we want to mimic req.query)
// body parser will examine the request
//    take the body
//    parse out the names
//    and make the properties in the object
//    req.body
//    and assign the appropriate values
// both express static AND express urlencoded (body parser) already
// exist in express

// app.use to activate middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
// app.use(some function that examines that examines req headers and sends back response)
// middleware function takes req, res, next
// create middleware that "rejects" requests that don't have a host header
// if it does have host header, then proceed normally
//
//
//
// conf object for sessions (see slides on details, but this is just boilerplate)
const sessionOptions = {
	secret: 'secret for signing session id',
	saveUninitialized: false,
	resave: false
};
// gives us access to a session object
// where we can stashi information
// read information

app.use(session(sessionOptions));
function checkRequestHeaders(req, res, next) {
  // if there's a host header
  // proceed normally
  // otherwise send back a 400
  if(req.get('host')) {
    next();
  } else {
    res.status(400).send('sry bad request');
  }
}



// remember the user's favorite color
// 1. creating form that allows user to enter a color (and display their favorite color)
// 2. that form will submit... as a post, and the post will save their input into the
//    session


app.use(checkRequestHeaders);
// middleware is called in order that they are used
// (so next refers to next thing that you used use on)
app.use(function(req, res, next) {
  console.log('middleware activated');
  next();
});

app.use((req, res, next) => {
  res.set('Server', 'NONE of your business');
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

// as the server, if i want to tell browser to create cookie
// i would send back this header
// Set-Cookie: name1=val1; httponly; secure
// Set-Cookie: name2=val2 
app.get('/cookied', (req, res) => {
  // hey browser! store this info
  // you can have multiple set-cookies
  // res.set('Set-Cookie', 'something=yes')
  // for more than one use append instead
  res.append('Set-Cookie', 'something=yes');
  res.send('you have cookies');
});

app.get('/colors', (req, res) => {
  res.render('color', {favColor: req.session.favColor});
});

app.post('/colors', (req, res) => {
  // we store the favorite color in the session
  req.session.favColor = req.body.color;
  res.redirect('/colors');
});
// create middleware that logged requests

app.listen(3000);



























