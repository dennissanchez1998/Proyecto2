require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
/* const hbs = require('hbs');
const mongoose = require('mongoose'); */
const logger = require('morgan');
const path = require('path');
global.myvar = 100;

const app_name = require('./package.json').name;
/* const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`); */

const app = express();
require('./configs/db.config');
require('./configs/session.config')(app);

app.use(function (req, res, next) {
  res.locals.currentUser = req.session.currentUser;
  res.locals.codTlf = req.session.codTlf;
  res.locals.phone = req.session.phone;
  
  global.imgLocal = ["@", "3"]

  next();
});

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send('index');
})

// Express View engine setup

app.use(require('node-sass-middleware-5')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

const auth = require('./routes/auth');
app.use('/auth', auth);
//Ruta de Rooms

const rm = require('./routes/rooms');
app.use('/', rm);

const user = require('./routes/user');
app.use('/user', user);


module.exports = app;
