var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', (req, res) => {
  res.send('FORM TO ADD NEW USER');
});

router.get('/remove', (req, res) => {
  res.send('REMOVED!!!!');
});

module.exports = router;
