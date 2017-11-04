//dependency for mysql
var mysql = require('mysql');
var connection;

//heroku deployment
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	//var keys = require('./keys');

	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'YES', //do not know my password trying to figure it out :/
		database: 'burgers_db' //my database
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