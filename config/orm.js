//connection.js dependency
var connection = require('./connection');

//connect to MySQL database
connection.connect(function(err) {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	};
	console.log('connected as id ' + connection.threadId);
});

//MySQL command methods
var orm = {

	//selectAll()
	selectAll: function(callback) {

		//mysql query
		connection.query('SELECT * FROM burgers', function(err, result) {
			if(err) throw err;
			callback(result);
		});
	},

	//insertOne()
	insertOne: function(burger_name, callback) {

		//new timestamp
		var d = new Date();
		var timestamp = '' + d.getFullYear() + '-'; 
		var month = '' + (d.getMonth() + 1); 
			//1 digit month handling
			if(month.length ==1) {
				month = '0' + month;
			}
		timestamp += month + '-';
		var hour ='' + d.getHours(); 
			//1 digit hours
			if(hour.length ==1) {
				hour = '0' + hour;
			}
		timestamp += hour + ':';
		var minute = '' + d.getMinutes();
			//1 digit minute
			if(minute.length ==1) {
				minute = '0' + minute;
			}
		timestamp += minute + ':';
		var second = '' + d.getSeconds();
			//if 1 digit second
			if(second.length =1) {
				second = '0' + second;
			}
		timestamp += second;

		//run MySQL query
		connection.query('INSERT INTO burgers SET ?', {
			burger_name: burger_name,
			devoured: false,
			date: timestamp
		}, function (err, result) {
			if(err) throw err;
			callback(result);
		});
	},

	//updateOne()
	updateOne: function(burgerID, callback) {

		//run query
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

//export the ORM
module.exports = orm;




 	

