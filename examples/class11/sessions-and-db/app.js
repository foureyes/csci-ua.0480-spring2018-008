const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));


const session = require('express-session');

const sessionOptions = { 
    secret: 'secret for signing session id', 
    saveUninitialized: false, 
    resave: false 
};
// gives us req.session
// allows writing and reading data on a per session basis
app.use(session(sessionOptions));

// 1 way to maintain state:
// unique session id that the client always sends along
// on the server, the server keeps track of that id, along with
// the data associated with it 
//
// where in the http request will the client put the session id
// within the headers
// specifically, if we're using cookies, then what header will session id
// Cookie: sessid=1234; favColor=green
// we're (the browser / client) going to pass session id over within Cookie header
// on the server... we parse cookies and try to get out the session id
// if there's no cookie: generate a session id and send back to client
// if there is a cookie, but session id doesn't exist: ^^^^
// if there is a cookie, session id exists, but it is not in the store: ^^^^
//  * this could mean that client has stale session id
//  * or they're using someone else's (that has already expired)
// if server wants to tell browser to create a cookie:
// Set-Cookie: sessid=1234; httponly; secure;
// Set-Cookie: favColor=green

// you _should_ have a db for storing your session id
// memcache, mongodb, couch, riak <--- dbs for storing session data
// in memory also works
// the default MemoryStore for express-session is not recommended for production use
// (but ok for dev and prototyping)

// some other Set-Cookie options are:
//
// domain - test.joev.com
// path - /foo/bar

app.set('view engine', 'hbs');

app.use((req, res, next) => {
  // log out cookies sent to us
  console.log(req.get('cookie')); 
  next();
});

app.get('/', (req, res) => {
  res.send('home');
});

// cookie parsing middleware
// get cookie header
// parse out name value pairs
// create an empty object on req
// for every and value
// req.cookies.name = value
// next

// session management middleware
// if req.cookies && req.cookies.sessionI/// req.session = store[req.cookies.sesionId]
// else
// generate a session
// send back Set-Cookie with that session id



// server sends response
// (multiple set cookies are fine)
// Set-Cookie: foo=bar
// Set-Cookie: color=green
//
// client sends another request
// Cookie: foo=bar; color=green
//
app.get('/cookies', (req, res) => {
  res.set('Set-Cookie', 'foo=bar');
  res.send('your cookies are set!');
});

// this is setting cookies so that
// favorite color is store as a cookie
// on the client
app.get('/color', (req, res) => {
  // display a form to get fav color
  res.render('color', {});
});

app.post('/color', (req, res) => {
  // set cookie w whatever is entered in
  // form
  res.set('Set-Cookie', 'color=' + req.body.color);

  // handle a post from form above
  res.redirect('/color');
});

app.get('/name', (req, res) => {
  res.render('name', {name: req.session.name});
});

app.post('/name', (req, res) => {
  // store whatever was sent in the form in our
  // server side session store (based on session id)
  req.session.name = req.body.name;
  res.redirect('/name');
});








app.listen(3000);
















