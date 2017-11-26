//dependency for mysql
var mysql = require('mysql');
var connection;

//heroku deployment
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
 	// connection = mysql.createConnection("mysql://otkvq87rhzej5qx7:zan8ojyunakoip7f@tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mud2eihhpczqyukl");
 	// var keys = require('./keys');

 	connection = mysql.createConnection({
 	host: 'tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'otkvq87rhzej5qx7',
	password: 'zan8ojyunakoip7f', //do not know my password trying to figure it out :/
 	database: 'mud2eihhpczqyukl', //my database
	port: 3306
 	});
}

//connection.connect(function(err) {
	//if(err) {
	//	console.error('Connection error: ' + err.stack);
	//	return;
	//}
	//console.log('Connection threadId: ' + connection.threadId);
//});

module.exports = connection;