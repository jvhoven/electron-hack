var low = require('lowdb');
var __base = require('__base');

/*
* Make connection with our LowDB, which is an awesome module
* to make local databases.
*
* https://github.com/typicode/lowdb
*/

exports.connect = function() {
	
	var db = low(__base + 'app/data/projects.json', {
	  autosave: true, // automatically save database on change (default: true)
	  async: true     // asyncrhonous write (default: true)
	});
	
	return db;
};

exports.add = function(name, color, url, language, options) {
	options = options || {};
	var description = "This is a sample description for your project, you can edit it anytime.";
	
	// Connect to db
	var db = exports.connect();
	
	db("projects").push({
		name: name,
		color: color,
		description: description,
		url: url,
		language: language,
		options: options
	});
};

exports.remove = function(name) {
	var db = exports.connect();
	// Todo implement
	db("projects").remove({
		name: name
	});
};

exports.get = function(name) {
	
	var db = exports.connect();
	var project = db("projects").find({
		name: name
	});
	
	return project;
};

exports.getAll = function() {
	var db = this.connect();
	var data = db.object.projects;
	
	return data;
};
