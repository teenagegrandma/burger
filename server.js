//dependencies
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');

//express app initialized
var app = express();

//setup
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//config page favicon and public folder
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

//config body-parser 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//console logger
var logger = require('morgan');
app.use(logger('dev'));

//config app routes
app.use(methodOverride('_method'));

var controller = require('./controllers/burgers_controllers');
app.use('/', controller);

//errors
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//Error handler
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

//error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;