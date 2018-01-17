const express = require('express');
const app = express();

const articles = {
    'hello': 'hello!!!!!',
    'bye': 'cyalater!!!!!'

}

app.get('/family/:month/:article', (req, res) => {
  res.send(req.params);
});
app.get(/(class\/(\d\d\d\d))/, (req, res) => {
  res.send(req.params);
});
app.listen(3000);







