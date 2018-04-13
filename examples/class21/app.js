const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('./db.js');

const Message = mongoose.model('Message');

app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');


app.get('/api/messages', (req, res) => {
  Message.find((err, messages) => {
    if(!err) {
      res.json(messages);
    }   
  });
});

app.post('/api/message', (req, res) => {
  console.log('POST received', req.body);
  const m = new Message({
    message: req.body.message, 
    name: req.body.name
  });
  m.save((err, savedMessage) => {
    if(!err) {
      res.send(savedMessage);
    } 
  });

  // create a new message based on form input
  // typically req.body
  // you fill out a form and press submit (browser does post for you)
});


app.listen(3000);
