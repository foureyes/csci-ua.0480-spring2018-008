const express = require('express');
const app = express();
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const msg = {message: 'hello there!!!!!'}

app.get('/api/messages', (req, res) => {
  res.json(msg);
});




app.listen(3000);
