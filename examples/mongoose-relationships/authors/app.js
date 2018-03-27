const express = require('express');
const mongoose = require('mongoose');
require('./db.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
