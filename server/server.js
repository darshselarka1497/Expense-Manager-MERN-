var express = require('express');
var router = require('./routes/route.js')
var path = require('path');

var app = express();

app.set('view engine', 'ejs');