const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  name: String
});

mongoose.model('Message', MessageSchema);

mongoose.connect('mongodb://localhost/class21');
