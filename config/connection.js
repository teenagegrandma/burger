var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	//var keys = require('./keys');

	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'YES',
		database: 'burgers_db'
	});
}

connection.connect(function(err) {
	if(err) {
		console.error('Connection error: ' + err.stack);
		return;
	}
	console.log('Connection threadId: ' + connection.threadId);
});

module.exports = connection;