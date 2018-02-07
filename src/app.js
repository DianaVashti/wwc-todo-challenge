var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes')

const ROOT_DIR = path.resolve(__dirname, '../')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// ***  EDIT HERE  ***
// Uncomment applicable line depending on which view engine you choose:
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${ROOT_DIR}/public`))

app.use(routes);

module.exports = app;
