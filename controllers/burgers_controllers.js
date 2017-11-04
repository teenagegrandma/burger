//dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/Burger.js');

//create routes
router.get('/', function(req, res) {
	res.redirect('/index');
});

//index page (render all burgers to DOM)
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = { burgers: data};
		//console.log it
		res.render('index', hbsObject);
	});
});

//create new burger
router.post('/burger/create', function(req, res) {
	burger.insertOne(req.body.burger_name, function() {
		res.redirect('/index');
	});
});

//devour a burger
router.post('/burger/eat/:id', function(req, res) {
	burger.updateOne(req.params.id, function() {
		res.redirect('/index');
	});
});

//export 
module.exports = router;