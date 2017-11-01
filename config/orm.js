var connection = require('./connection');
 	
funciton printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num: i++) {
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key))
			arr.push(key + '=' + ob[key]);
	}
	return arr.toString();
}

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	create: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	update: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;

		queryString += ' WHERE ';
		queryString += condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;

