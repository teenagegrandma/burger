var mysql = require('../node_modules/mysql');

if (process.env.JAWSDB_URL)
	connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
	var keys = require('./keys');

	connection = mysql.createConnection({
		host: keys.db.host,
		user: keys.db.user,
		password: keys.db.password,
		databse: keys.db.database
	});
}

connection.connect(function(err) {
	if(err) {
		console.error('Connection error: ' + err.stack);
		return;
	}
	console.log('Connection threadId: ' + conneciton.threadId);
});

module.exports = connection;