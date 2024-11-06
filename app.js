

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import express-ejs-layouts
var ejsLayouts = require('express-ejs-layouts');

var app = express();
app.use(ejsLayouts);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// Serve static files
app.use(express.static('public'));

// Set up the view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Set up the server to listen on a port
var port = process.env.PORT || 3000; // Default to port 3000 or use the PORT environment variable
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

module.exports = app;
